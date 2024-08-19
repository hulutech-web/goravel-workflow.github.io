# 框架模型

### 模型基础
框架内置了有关审批框架的默认模型定义，风格完全适配goravel，具体如下。
#### Template流程模板
```go
type Template struct {
	orm.Model
	TemplateName  string `gorm:"column:template_name;not null;default:''" json:"template_name"`
	TemplateForms []TemplateForm
}
```
流程模板:流程模板定义了有关审批框架的字段设计，并为模板取名以识别。
#### TemplateForm流程模板表单
```go
type TemplateForm struct {
	orm.Model
	Field             string            `gorm:"column:field;not null;default:'';comment:'表单字段英文名'" json:"field" form:"field"`
	FieldName         string            `gorm:"column:field_name;not null;default:'';comment:'表单字段中文名'" json:"field_name" form:"field_name"`
	FieldType         string            `gorm:"column:field_type;not null;default:'';comment:'表单字段类型'" json:"field_type" form:"field_type"`
	FieldValue        common.FieldValue `gorm:"column:field_value;type:text;comment:'表单字段值，select radio checkbox用'" json:"field_value" form:"field_value"`
	FieldDefaultValue string            `gorm:"column:field_default_value;type:text;comment:'表单字段默认值'" json:"field_default_value" form:"field_default_value"`
	FieldRules        common.Rule       `gorm:"column:field_rules;" json:"field_rules" form:"field_rules"`
	Sort              int               `gorm:"column:sort;not null;default:100;comment:'排序'" json:"sort" form:"sort"`
	TemplateID        uint              `gorm:"column:template_id;not null;default:0;comment:'模板ID'" json:"template_id" form:"template_id"`
	Template          Template
}
```
模板字段：为每一个流程模板设置了字段选项，且与template保持一对多关系。``Template:TemplateForm = 1:n``

#### Dept部门模型
```go
type Dept struct {
	orm.Model
	DeptName   string `gorm:"column:dept_name;not null;default:''" json:"dept_name"`
	Pid        uint   `gorm:"column:pid;not null;default:0" json:"pid"`
	DirectorID int    `gorm:"column:director_id;not null;default:0" json:"director_id"` // 部门主管
	ManagerID  int    `gorm:"column:manager_id;not null;default:0" json:"manager_id"`   // 部门经理
	Rank       int    `gorm:"column:rank;not null;default:1" json:"rank"`
	Html       string `gorm:"column:html;null;default:''" json:"html"`
	Level      int    `gorm:"column:level;null;default:0" json:"level"`
	Director   *Emp   `gorm:"foreignkey:DirectorID"` // 关联主管
	Manager    *Emp   `gorm:"foreignkey:ManagerID"`  // 关联经理
}
```
部门：部门模型定义了部门的基本信息，且内置部门主管和部门经理和部门主管2个职位，部门层级为树状结构。

#### Emp员工模型
```go
type Emp struct {
	orm.Model
	Name     string `gorm:"column:name;not null" json:"name" form:"name"`
	Email    string `gorm:"column:email;not null;unique_index:users_email_unique" json:"email" form:"email"`
	Password string `gorm:"column:password;not null" json:"-" form:"password"` // Exclude password from JSON response
	WorkNo   string `gorm:"column:workno;not null;unique_index:users_workno_unique" json:"workno" form:"workno"`
	DeptID   int    `gorm:"column:dept_id;not null;default:0" json:"dept_id" form:"dept_id"`
	Leave    int    `gorm:"column:leave;not null;default:0" json:"leave" form:"leave"`
	UserID   uint   `gorm:"column:user_id;" json:"user_id" form:"user_id"`
	Dept     Dept   `json:"Dept"`
}
```
员工：员工模型与部门保持一对多关系，Dept:Emp=1:n
### 定义工作流
### Flow工作流模型
``flow``模型为流程框架基础模型工作流模型，其中字段``jsplumb``由前端组件可视化生成，详见[goravel-workflow-vue](https://github.com/hulutech-web/goravel-workflow-vue)。
```go
type Flow struct {
	orm.Model
	FlowNo      string       `gorm:"column:flow_no;not null" json:"flow_no" form:"flow_no"`
	FlowName    string       `gorm:"column:flow_name;not null;default:''" json:"flow_name" form:"flow_name"`
	TemplateID  int          `gorm:"column:template_id;not null;default:0" json:"template_id" form:"template_id"`
	Flowchart   string       `gorm:"column:flowchart" json:"flowchart" form:"flowchart"`
	Jsplumb     string       `gorm:"column:jsplumb;comment:'jsplumb流程图数据'" json:"jsplumb" form:"jsplumb"`
	TypeID      int          `gorm:"column:type_id;not null;default:0" json:"type_id" form:"type_id"`
	IsPublish   bool         `gorm:"column:is_publish;not null;default:0" json:"is_publish" form:"is_publish"`
	IsShow      bool         `gorm:"column:is_show;not null;default:1" json:"is_show" form:"is_show"`
	Processes   []Process    `gorm:"foreignKey:FlowID"`     // HasMany Process
	ProcessVars []ProcessVar `gorm:"foreignKey:FlowID"`     // HasMany ProcessVar
	Template    Template     `gorm:"foreignKey:TemplateID"` // BelongsTo Template
	Flowtype    Flowtype     `gorm:"foreignKey:TypeID"`     // BelongsTo FlowType
}
```
### Flowtype工作流类型
```go
type Flowtype struct {
	orm.Model
	TypeName string `gorm:"column:type_name;not null;default:''" json:"type_name"`
	Flows    []Flow `gorm:"-"`
}
```
### Flowlink流程步骤流转轨迹
```go
type Flowlink struct {
	orm.Model
	Type       string `gorm:"column:type;not null;comment:'Condition:表示步骤流转\\nRole:当前步骤操作人'"`                             // 类型：Condition或Role
	Auditor    string `gorm:"column:auditor;not null;default:'0';comment:'审批人 系统自动 指定人员 指定部门 指定角色\\ntype=Condition时不启用'"` // 审批人设置
	Expression string `gorm:"column:expression;not null;default:'';comment:'条件判断表达式\\n为1表示true，通过的话直接进入下一步骤'"`            // 条件判断表达式
	Sort       int    `gorm:"column:sort;not null;comment:'条件判断顺序'"`                                                      // 判断顺序

	FlowID        uint    `gorm:"column:flow_id"`                         // 流程ID
	ProcessID     uint    `gorm:"column:process_id"`                      // 当前步骤ID
	NextProcessID int     `gorm:"column:next_process_id;default:2"`       // 下一步骤ID
	Process       Process `gorm:"foreignKey:ProcessID;references:id"`     // HasOne Process
	NextProcess   Process `gorm:"foreignKey:NextProcessID;references:id"` // HasOne NextProcess
	Flow          Flow    `gorm:"foreignKey:FlowID;references:id"`        // BelongsTo Flow
}
```
``Flowlink``模型定义了审批步骤间的关系，Auditor字段指示了审批人信息。
### Process流程步骤
```go
type Process struct {
	orm.Model
	FlowID           int       `gorm:"column:flow_id;not null;default:0;comment:'流程id'" json:"flow_id"`
	ProcessName      string    `gorm:"column:process_name;not null;default:'';comment:'步骤名称'" json:"process_name"`
	LimitTime        int       `gorm:"column:limit_time;not null;default:0;comment:'限定时间,单位秒'" json:"limit_time"`
	Type             string    `gorm:"column:type;not null;default:'operation';comment:'流程图显示操作框类型'" json:"type"`
	Icon             string    `gorm:"column:icon;default:'';comment:'流程图显示图标'" json:"icon,omitempty"`
	ProcessTo        string    `gorm:"column:process_to;not null;default:''" json:"process_to"`
	Style            string    `gorm:"column:style;type:text;" json:"style,omitempty"`
	StyleColor       string    `gorm:"column:style_color;not null;default:'#78a300'" json:"style_color"`
	StyleHeight      int       `gorm:"column:style_height;not null;default:30" json:"style_height"`
	StyleWidth       int       `gorm:"column:style_width;not null;default:30" json:"style_width"`
	PositionLeft     string    `gorm:"column:position_left;not null;default:'100px'" json:"position_left"`
	PositionTop      string    `gorm:"column:position_top;not null;default:'200px'" json:"position_top"`
	Position         int       `gorm:"column:position;not null;default:1;comment:'步骤位置：1正常步骤2：转入子流程0：第一步 当为2时 child_flow_id child_after child_back_process 可设置'" json:"position"`
	ChildFlowID      int       `gorm:"column:child_flow_id;not null;default:0;comment:'子流程id'" json:"child_flow_id"`
	ChildAfter       int       `gorm:"column:child_after;not null;default:2;comment:'子流程结束后 1.同时结束父流程 2.返回父流程'" json:"child_after"`
	ChildBackProcess int       `gorm:"column:child_back_process;not null;default:0;comment:'子流程结束后返回父流程进程'" json:"child_back_process"`
	Description      string    `gorm:"column:description;not null;default:'';comment:'步骤描述'" json:"description"`
	ProcessVars      []Process `gorm:"many2many:process_vars;" json:"process_vars"`
	Flow             Flow
}
```
流程步骤定义了流程框架中每一个步骤的相关配置，包含步骤名称，前端步骤展示样式，审批条件等信息

### ProcessVar 步骤判断变量记录
```go
type ProcessVar struct {
	orm.Model
	ProcessID       int     `gorm:"column:process_id;not null" json:"process_id"`
	FlowID          int     `gorm:"column:flow_id;not null;comment:'流程id'" json:"flow_id"`
	ExpressionField string  `gorm:"column:expression_field;not null;comment:'条件表达式字段名称'" json:"expression_field"`
	Process         Process `gorm:"foreignKey:ProcessID;references:ID"`
}
```

保存：每一个流程步骤中，如果存在审批变量，则记录流程步骤中的变量信息与Process关系为:Process:ProcessVar=1:n

### 发起工作流

### Entry模型
```go
type Entry struct {
	orm.Model
	Title          string      `gorm:"column:title;not null;default:''" json:"title" form:"title"`
	FlowID         uint        `gorm:"column:flow_id;not null;default:0" json:"flow_id" form:"flow_id"`
	EmpID          uint        `gorm:"column:emp_id;not null;default:0" json:"emp_id" form:"emp_id"`
	ProcessID      uint        `gorm:"column:process_id;not null;default:0" json:"process_id" form:"process_id"`
	Circle         int         `gorm:"column:circle;not null;default:1" json:"circle" form:"circle"`
	Status         int         `gorm:"column:status;not_null" json:"status" form:"status"`
	Pid            int         `gorm:"column:pid;not null;default:0" json:"pid" form:"pid"`
	EnterProcessID int         `gorm:"column:enter_process_id;not null;default:0" json:"enter_process_id" form:"enter_process_id"`
	EnterProcID    int         `gorm:"column:enter_proc_id;not null;default:0" json:"enter_proc_id" form:"enter_proc_id"`
	Child          int         `gorm:"column:child;not null;default:0" json:"child" form:"child"`
	Flow           Flow        `gorm:"foreignKey:flow_id"` // 关联的Flow
	Emp            Emp         `gorm:"foreignKey:emp_id"`  // 关联的Emp
	Procs          []*Proc     // HasMany Proc
	Process        Process     `gorm:"foreignKey:process_id"` // 关联的Process
	EntryDatas     []EntryData // HasMany EntryData
	ParentEntry    *Entry      `gorm:"foreignKey:pid"`              // 关联的父Entry
	Children       []Entry     `gorm:"foreignKey:pid"`              // HasMany Entry, 级联删除
	EnterProcess   Process     `gorm:"foreignKey:enter_process_id"` // 关联的进入步骤Process
}
```
:::tip
流程实例:流程实例代表发起了一个流程，他表示在框架中新发起了某一个流程。工作流模型定义了流程发起时，每一个流程实例的相关信息，包含流程实例名称，流程实例发起人，流程实例状态，流程实例关联的流程，流程实例关联的流程步骤，流程实例关联的流程步骤变量等信息
:::
### EntryData实例数据模型
```go
type EntryData struct {
	orm.Model
	EntryID     int    `gorm:"column:entry_id;not null;default:0" form:"entry_id" json:"entry_id"`
	FlowID      int    `gorm:"column:flow_id;not null;default:0" form:"flow_id" json:"flow_id"`
	FieldName   string `gorm:"column:field_name;not null;default:''" form:"field_name" json:"field_name"`
	FieldValue  string `gorm:"column:field_value" json:"field_value" form:"field_value" json:"field_value"`
	FieldRemark string `gorm:"column:field_remark;not null;default:''" form:"field_remark" json:"field_remark"`
}
```

实例数据：保存提交流程是的表单数据，表单数据来源于按照template_form动态设计出来的表单字段内容。

### 执行工作流
```go
type Proc struct {
	orm.Model
	EntryID     uint            `gorm:"column:entry_id;not null" json:"entry_id" form:"entry_id"`
	FlowID      int             `gorm:"column:flow_id;not null;comment:'流程id'" json:"flow_id" form:"flow_id"`
	ProcessID   int             `gorm:"column:process_id;not null;comment:'当前步骤'" json:"process_id" form:"process_id"`
	ProcessName string          `gorm:"column:process_name;not null;default:'';comment:'当前步骤名称'" json:"process_name" form:"process_name"`
	EmpID       int             `gorm:"column:emp_id;not null;comment:'审核人'" json:"emp_id" form:"emp_id"`
	EmpName     string          `gorm:"column:emp_name;default:null;comment:'审核人名称'" json:"emp_name" form:"emp_name"`
	DeptName    string          `gorm:"column:dept_name;default:null;comment:'审核人部门名称'" json:"dept_name" form:"dept_name"`
	AuditorID   int             `gorm:"column:auditor_id;not null;default:0;comment:'具体操作人'" json:"auditor_id" form:"auditor_id"`
	AuditorName string          `gorm:"column:auditor_name;not null;default:'';comment:'操作人名称'" json:"auditor_name" form:"auditor_name"`
	AuditorDept string          `gorm:"column:auditor_dept;not null;default:'';comment:'操作人部门'" json:"auditor_dept" form:"auditor_dept"`
	Status      int             `gorm:"column:status;not null;comment:'当前处理状态 0待处理 9通过 -1驳回\n0：处理中\n-1：驳回\n9：会签'" json:"status" form:"status"`
	Content     string          `gorm:"column:content;default:null;comment:'批复内容'" json:"content" form:"content"`
	IsRead      int             `gorm:"column:is_read;not null;default:0;comment:'是否查看'" json:"is_read" form:"is_read"`
	IsReal      bool            `gorm:"column:is_real;not null;default:1;comment:'审核人和操作人是否同一人'" json:"is_real" form:"is_real"`
	Circle      int             `gorm:"column:circle;not null;default:1" json:"circle" form:"circle"`
	Beizhu      string          `gorm:"column:beizhu;type:text;comment:'备注'" json:"beizhu" form:"beizhu"`
	Concurrence carbon.DateTime `gorm:"column:concurrence;not null;default:0;comment:'并行查找解决字段， 部门 角色 指定 分组用'" json:"concurrence" form:"concurrence"`
	Emp         Emp             `gorm:"foreignKey:EmpID"`                                                  // 关联的Emp
	Entry       Entry           `gorm:"foreignKey:EntryID"`                                                // 关联的Entry
	Process     Process         `gorm:"foreignKey:ProcessID"`                                              // 关联的Process
	Flow        Flow            `gorm:"foreignKey:FlowID"`                                                 // 关联的Flow
	SubProcs    []Proc          `gorm:"foreignkey:EntryID;constraint:OnUpdate:CASCADE,OnDelete:NO ACTION"` // HasMany Proc
}
```
处理明细表:记录每个流程的流转记录，包括审核人、审核状态、审核内容等。
