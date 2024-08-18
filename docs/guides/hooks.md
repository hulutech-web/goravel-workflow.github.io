# 框架hook回调
  框架核心workflow[核心](https://github.com/hulutech-web/goravel-workflow/blob/master/services/workflow/workflow.go)是一个工厂单例，使用NewBaseWorkflow创建。  

### 介绍
采用go的组合方式，实现2个接口即可，即可获得框架提供的能力，开发者可自行进行实现后续逻辑，如发送审核成功后通知消息，审核失败后的后续处理等等。  
接口1-通知发起人：NotifyNextAuditor  
接口2-通知下一审批人：NotifySendOne  

### 集成于使用
#### 模型关联
- 定义关联模型，本案以User结构为例。
1. 定义结构体，注入服务,WorkNo,Password为必须
```go
import . "github.com/hulutech-web/goravel-workflow/services/workflow"
type User struct {
	orm.Model
	Name     string `gorm:"column:name;type:varchar(255);not null" form:"name" json:"name"`
	Avatar   string `gorm:"column:avatar;type:varchar(255);not null" form:"avatar" json:"avatar"`
	WorkNo   string `gorm:"column:workno;not null;unique_index:users_workno_unique" json:"workno" form:"workno"`
	Password string `gorm:"column:password;type:varchar(255);not null" form:"password" json:"password"`
	Email    string `gorm:"column:email;type:varchar(255);not null" form:"email" json:"email"`
	Mobile   string `gorm:"column:mobile;type:varchar(255);not null" form:"mobile" json:"mobile"`
	Gender   int    `gorm:"column:gender;type:varchar(255);not null" form:"gender" json:"gender"`
	State    int    `gorm:"column:state;type:varchar(255);not null" form:"state" json:"state"`
	Workflow *Workflow `gorm:"-"`
	orm.SoftDeletes
}
```
2. 定义接口，实现2个接口
```go
// 通知发起人，在被驳回时调用，或者整个流程结束时调用。
func (u *User) NotifySendOne(id uint) error {

	fmt.Printf("custom ======User %d unpasshook called.\n", id)
	return nil
}

// 通知下一个审批人，当当前环节的审批人通过时，触发。
func (u *User) NotifyNextAuditor(id uint) error {
	fmt.Printf("custom ======User %d passhook called.\n", id)
	return nil
}

```
#### 实例化workflow
- 注册workflow，在``app/providers/app_services_provider.go``中实例化workflow，并注入hooks

```go
import "github.com/hulutech-web/goravel-workflow/services/workflow"
func (receiver *AppServiceProvider) Boot(app foundation.Application) {
	wf := workflow.NewBaseWorkflow()
	// 注册子级的方法到工作流中
	user := &models.User{Workflow: wf}
	wf.RegisterHook("NotifySendOneHook", reflect.ValueOf(user.NotifySendOne))
	wf.RegisterHook("NotifyNextAuditorHook", reflect.ValueOf(user.NotifyNextAuditor))
}

```

- 实现效果
``NotifySendOne``  
当流程执行过程中，流程被驳回时，将自动调用``NotifySendOne``方法，传递的id参数为emp.id，表示通知发起人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。    
当流程执行过程中，整个流程执行完毕时（所有人都同意），将自动调用``NotifySendOne``方法，传递的id参数为emp.id，表示通知发起人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。  

``NotifyNextAuditor``
当流程执行过程中，其中某一个环节审批通过时，将自动调用``NotifyNextAuditor``方法，传递的id参数为emp.id，表示通知下一个审批人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。