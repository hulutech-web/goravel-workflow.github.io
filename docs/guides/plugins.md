## 插件（开发中）

问题：流程框架在各个处理环节，一般情况下是无法对最初的流程设计进行更改的。  
场景：
任务分配流程：
在最初设计流程时，部门涉及到有 3 层结构，流程的方向是从高级部门到低级部门，流程需要在第二层部门时，把权限分配给第二层部门的审批人，第二层审批可以直接对流程中携带的数据进行二次处理。
- 插件
goravel-workflow 提供了插件机制，允许用户开发者自定义插件，并集成到框架中，实现自定义功能。  
- 自主性
同时，插件可以绑定到某一个流程上的某一个环节上，该环节的设计交由开发者自行完成。

### 场景
- 资金拨付审批  
  上级部门将资金拨付给下级部门后，希望由 2 级部门能够自主地将资金分配给 3 级部门，例如三级部门有 10 个，总的资金是 100 万元，现在二级部门就可以根据实际情况分配这100万到各个子部门了。  
由下级部门自主决定，这种场景下，下级部门的分配情况可能如下：


| 部门    | 人数 | 分配金额（万元） |
| :------ | :--: | :--------------: |
| 部门一  |  10  |        10        |
| 部门二  |  12  |        12        |
| 部门... |  x   |        x         |

- 流程携带新的数据
  当2级部门将数据进行分配后，3级部门只能获得分配给自身的资金，而不能查看或者使用其他的资金

### 官方插件

#### 🦁数量分配插件(官方)

针对如上需求，框架提供了任务分配插件，通过artisan 命令进行发布资源，并自动集成到框架中  
官方定义了一个插件收集器，并新建了插件表和插件配置表，当注册官方插件后，2张表将自动生成
- 内置官方插件
``app_service_provider.go`` 中定义了官方插件
```go
import	"github.com/hulutech-web/goravel-workflow/services/workflow/official_plugins"

op := official_plugins.NewDistributePlugin()
cl := workflow.NewCollector([]workflow.Plugin{op})
cl.RegisterPlugin("DistributePlugin")
```
- 插件作用
插件是安装到某一个流程上，且在流程的某一个步骤上，由使用者去新建插件规则  
例如将经费，分配给某些部门，每个部门的具体金额配置  
- 具体效果
当完成某一个审批之后，流程流转之前，运行官方提供的插件，插件名称必须为:"DistributePlugin"


#### 🦁API
系统提供了有关插件的几个api方法
```go
//1、命令行新建一个插件
//2、开发者通过设计，设计出该插件的一些选项和规则
router.Post("api/plugin/product", distributeCtrl.Product)
//3、为流程选择某些插件
router.Post("api/flow/select_plugins", distributeCtrl.SelectPlugins)
//4、获取系统中已有的插件
router.Get("api/plugin/list", distributeCtrl.List)
```

#### 🛠插件开发

框架提供了插件机制，允许用户开发者自定义插件，并集成到框架中，实现自定义功能。

- artisan 命令
```shell
go run .artisan make:plugin
```

根据提示填写插件需要的相关配置，系统将根据插件信息新建插件记录
- 注册插件
``app_service_provider.go``中注册开发定义的插件

```go
myop := my_plugins.NewDistributePlugin()
cl := workflow.NewCollector([]workflow.Plugin{myop})
cl.RegisterPlugin("MyPlugin")
```
- 插件开发（待完善）