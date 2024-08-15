# 教程

### 系统安装

审批流框架基于最新的goravel进行适配，版本号为v1.1.14，请在安装完goravel后，在进行框架集成操作。goravel安装请访问[goravel官网](https://www.goravel.dev/zh/)

#### 1. 安装扩展
```go
go get  github.com/hulutech-web/goravel-workflow
```

##### 1.1 注册服务提供者:config/app.go
```go
import	"github.com/hulutech-web/goravel-workflow"
func init() {
"providers": []foundation.ServiceProvider{
	....
	&workflow.ServiceProvider{},
    }
}
```

##### 1.2 启动goravel项目
```shell
go run . 
```
### 发布资源
默认将发布2类资源，一是配置文件，而是数据表迁移
```go
go run . artisan vendor:publish --package=github.com/hulutech-web/goravel-workflow
```
#### 1. 模型映射资源``config/workflow.go``
```go
config := facades.Config()
	config.Add("workflow", map[string]any{
		"Dept": "Department", //部门关联应用中的模型
		"Emp":  "User",       //员工关联应用中的模型
	})
```
解释：如果在集成前已经定义了有关用户与部门模型，那么请在该配置中进行修改，关联关系为1:1关系。

#### 2. 数据库迁移，goravel/database
流程框架将发布的迁移sql文件，seeder填充文件，发布到该路径下，请根据需要自行修改。
#### 3. 运行数据库迁移
```shell
go run . artisan migrate
```
goravel命令将创建有关流程框架的所有表结构，默认带有测试数据，如需要查看测试数据，请运行
```shell
go run . artisan migrate:fresh --seed
```
### 路由
默认采用``api``路由，请在集成时注意路由冲突问题，并酌情修改。详情[路由](https://github.com/hulutech-web/goravel-workflow/tree/master/routes)

### 表单验证规则
```go
package rules

import (
	"github.com/goravel/framework/contracts/validation"
	"strings"
)

type AlphaRule struct {
}

// Signature The name of the rule.
func (receiver *AlphaRule) Signature() string {
	return "alpha_rule"
}

// Passes Determine if the validation rule passes.
func (receiver *AlphaRule) Passes(data validation.Data, val any, options ...any) bool {
	if val == "" {
		return true
	}
	for _, ch := range []rune(val.(string)) {
		if !('a' <= ch && ch <= 'z') && !('A' <= ch && ch <= 'Z') && !(strings.Contains("_", string(ch))) {
			return false
		}
	}
	return true
}

// Message Get the validation error message.
func (receiver *AlphaRule) Message() string {
	return "字符 :attribute 必须是英文字符或者包含下划线"
}
```

goravel命令
```shell
go run . artisan make:rule AlphaRule
```
并将该代码复制到规则文件中。
### 注册规则
在``app/providers/validation_service_provider.go``中注册该规则。
```go
...
func (receiver *ValidationServiceProvider) rules() []validation.Rule {
  return []validation.Rule{
    &rules.AlphaRule{},
  }
}
...
```