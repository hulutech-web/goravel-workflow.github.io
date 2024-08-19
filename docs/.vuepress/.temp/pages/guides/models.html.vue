<template><div><h1 id="框架模型" tabindex="-1"><a class="header-anchor" href="#框架模型"><span>框架模型</span></a></h1>
<h3 id="模型基础" tabindex="-1"><a class="header-anchor" href="#模型基础"><span>模型基础</span></a></h3>
<p>框架内置了有关审批框架的默认模型定义，风格完全适配goravel，具体如下。</p>
<h4 id="template流程模板" tabindex="-1"><a class="header-anchor" href="#template流程模板"><span>Template流程模板</span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Template <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	TemplateName  <span class="token builtin">string</span> <span class="token string">`gorm:"column:template_name;not null;default:''" json:"template_name"`</span></span>
<span class="line">	TemplateForms <span class="token punctuation">[</span><span class="token punctuation">]</span>TemplateForm</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程模板:流程模板定义了有关审批框架的字段设计，并为模板取名以识别。</p>
<h4 id="templateform流程模板表单" tabindex="-1"><a class="header-anchor" href="#templateform流程模板表单"><span>TemplateForm流程模板表单</span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> TemplateForm <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	Field             <span class="token builtin">string</span>            <span class="token string">`gorm:"column:field;not null;default:'';comment:'表单字段英文名'" json:"field" form:"field"`</span></span>
<span class="line">	FieldName         <span class="token builtin">string</span>            <span class="token string">`gorm:"column:field_name;not null;default:'';comment:'表单字段中文名'" json:"field_name" form:"field_name"`</span></span>
<span class="line">	FieldType         <span class="token builtin">string</span>            <span class="token string">`gorm:"column:field_type;not null;default:'';comment:'表单字段类型'" json:"field_type" form:"field_type"`</span></span>
<span class="line">	FieldValue        common<span class="token punctuation">.</span>FieldValue <span class="token string">`gorm:"column:field_value;type:text;comment:'表单字段值，select radio checkbox用'" json:"field_value" form:"field_value"`</span></span>
<span class="line">	FieldDefaultValue <span class="token builtin">string</span>            <span class="token string">`gorm:"column:field_default_value;type:text;comment:'表单字段默认值'" json:"field_default_value" form:"field_default_value"`</span></span>
<span class="line">	FieldRules        common<span class="token punctuation">.</span>Rule       <span class="token string">`gorm:"column:field_rules;" json:"field_rules" form:"field_rules"`</span></span>
<span class="line">	Sort              <span class="token builtin">int</span>               <span class="token string">`gorm:"column:sort;not null;default:100;comment:'排序'" json:"sort" form:"sort"`</span></span>
<span class="line">	TemplateID        <span class="token builtin">uint</span>              <span class="token string">`gorm:"column:template_id;not null;default:0;comment:'模板ID'" json:"template_id" form:"template_id"`</span></span>
<span class="line">	Template          Template</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板字段：为每一个流程模板设置了字段选项，且与template保持一对多关系。<code v-pre>Template:TemplateForm = 1:n</code></p>
<h4 id="dept部门模型" tabindex="-1"><a class="header-anchor" href="#dept部门模型"><span>Dept部门模型</span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Dept <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	DeptName   <span class="token builtin">string</span> <span class="token string">`gorm:"column:dept_name;not null;default:''" json:"dept_name"`</span></span>
<span class="line">	Pid        <span class="token builtin">uint</span>   <span class="token string">`gorm:"column:pid;not null;default:0" json:"pid"`</span></span>
<span class="line">	DirectorID <span class="token builtin">int</span>    <span class="token string">`gorm:"column:director_id;not null;default:0" json:"director_id"`</span> <span class="token comment">// 部门主管</span></span>
<span class="line">	ManagerID  <span class="token builtin">int</span>    <span class="token string">`gorm:"column:manager_id;not null;default:0" json:"manager_id"`</span>   <span class="token comment">// 部门经理</span></span>
<span class="line">	Rank       <span class="token builtin">int</span>    <span class="token string">`gorm:"column:rank;not null;default:1" json:"rank"`</span></span>
<span class="line">	Html       <span class="token builtin">string</span> <span class="token string">`gorm:"column:html;null;default:''" json:"html"`</span></span>
<span class="line">	Level      <span class="token builtin">int</span>    <span class="token string">`gorm:"column:level;null;default:0" json:"level"`</span></span>
<span class="line">	Director   <span class="token operator">*</span>Emp   <span class="token string">`gorm:"foreignkey:DirectorID"`</span> <span class="token comment">// 关联主管</span></span>
<span class="line">	Manager    <span class="token operator">*</span>Emp   <span class="token string">`gorm:"foreignkey:ManagerID"`</span>  <span class="token comment">// 关联经理</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部门：部门模型定义了部门的基本信息，且内置部门主管和部门经理和部门主管2个职位，部门层级为树状结构。</p>
<h4 id="emp员工模型" tabindex="-1"><a class="header-anchor" href="#emp员工模型"><span>Emp员工模型</span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Emp <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name     <span class="token builtin">string</span> <span class="token string">`gorm:"column:name;not null" json:"name" form:"name"`</span></span>
<span class="line">	Email    <span class="token builtin">string</span> <span class="token string">`gorm:"column:email;not null;unique_index:users_email_unique" json:"email" form:"email"`</span></span>
<span class="line">	Password <span class="token builtin">string</span> <span class="token string">`gorm:"column:password;not null" json:"-" form:"password"`</span> <span class="token comment">// Exclude password from JSON response</span></span>
<span class="line">	WorkNo   <span class="token builtin">string</span> <span class="token string">`gorm:"column:workno;not null;unique_index:users_workno_unique" json:"workno" form:"workno"`</span></span>
<span class="line">	DeptID   <span class="token builtin">int</span>    <span class="token string">`gorm:"column:dept_id;not null;default:0" json:"dept_id" form:"dept_id"`</span></span>
<span class="line">	Leave    <span class="token builtin">int</span>    <span class="token string">`gorm:"column:leave;not null;default:0" json:"leave" form:"leave"`</span></span>
<span class="line">	UserID   <span class="token builtin">uint</span>   <span class="token string">`gorm:"column:user_id;" json:"user_id" form:"user_id"`</span></span>
<span class="line">	Dept     Dept   <span class="token string">`json:"Dept"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>员工：员工模型与部门保持一对多关系，Dept:Emp=1:n</p>
<h3 id="定义工作流" tabindex="-1"><a class="header-anchor" href="#定义工作流"><span>定义工作流</span></a></h3>
<h3 id="flow工作流模型" tabindex="-1"><a class="header-anchor" href="#flow工作流模型"><span>Flow工作流模型</span></a></h3>
<p><code v-pre>flow</code>模型为流程框架基础模型工作流模型，其中字段<code v-pre>jsplumb</code>由前端组件可视化生成，详见<a href="https://github.com/hulutech-web/goravel-workflow-vue" target="_blank" rel="noopener noreferrer">goravel-workflow-vue</a>。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Flow <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	FlowNo      <span class="token builtin">string</span>       <span class="token string">`gorm:"column:flow_no;not null" json:"flow_no" form:"flow_no"`</span></span>
<span class="line">	FlowName    <span class="token builtin">string</span>       <span class="token string">`gorm:"column:flow_name;not null;default:''" json:"flow_name" form:"flow_name"`</span></span>
<span class="line">	TemplateID  <span class="token builtin">int</span>          <span class="token string">`gorm:"column:template_id;not null;default:0" json:"template_id" form:"template_id"`</span></span>
<span class="line">	Flowchart   <span class="token builtin">string</span>       <span class="token string">`gorm:"column:flowchart" json:"flowchart" form:"flowchart"`</span></span>
<span class="line">	Jsplumb     <span class="token builtin">string</span>       <span class="token string">`gorm:"column:jsplumb;comment:'jsplumb流程图数据'" json:"jsplumb" form:"jsplumb"`</span></span>
<span class="line">	TypeID      <span class="token builtin">int</span>          <span class="token string">`gorm:"column:type_id;not null;default:0" json:"type_id" form:"type_id"`</span></span>
<span class="line">	IsPublish   <span class="token builtin">bool</span>         <span class="token string">`gorm:"column:is_publish;not null;default:0" json:"is_publish" form:"is_publish"`</span></span>
<span class="line">	IsShow      <span class="token builtin">bool</span>         <span class="token string">`gorm:"column:is_show;not null;default:1" json:"is_show" form:"is_show"`</span></span>
<span class="line">	Processes   <span class="token punctuation">[</span><span class="token punctuation">]</span>Process    <span class="token string">`gorm:"foreignKey:FlowID"`</span>     <span class="token comment">// HasMany Process</span></span>
<span class="line">	ProcessVars <span class="token punctuation">[</span><span class="token punctuation">]</span>ProcessVar <span class="token string">`gorm:"foreignKey:FlowID"`</span>     <span class="token comment">// HasMany ProcessVar</span></span>
<span class="line">	Template    Template     <span class="token string">`gorm:"foreignKey:TemplateID"`</span> <span class="token comment">// BelongsTo Template</span></span>
<span class="line">	Flowtype    Flowtype     <span class="token string">`gorm:"foreignKey:TypeID"`</span>     <span class="token comment">// BelongsTo FlowType</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flowtype工作流类型" tabindex="-1"><a class="header-anchor" href="#flowtype工作流类型"><span>Flowtype工作流类型</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Flowtype <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	TypeName <span class="token builtin">string</span> <span class="token string">`gorm:"column:type_name;not null;default:''" json:"type_name"`</span></span>
<span class="line">	Flows    <span class="token punctuation">[</span><span class="token punctuation">]</span>Flow <span class="token string">`gorm:"-"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flowlink流程步骤流转轨迹" tabindex="-1"><a class="header-anchor" href="#flowlink流程步骤流转轨迹"><span>Flowlink流程步骤流转轨迹</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Flowlink <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	Type       <span class="token builtin">string</span> <span class="token string">`gorm:"column:type;not null;comment:'Condition:表示步骤流转\\nRole:当前步骤操作人'"`</span>                             <span class="token comment">// 类型：Condition或Role</span></span>
<span class="line">	Auditor    <span class="token builtin">string</span> <span class="token string">`gorm:"column:auditor;not null;default:'0';comment:'审批人 系统自动 指定人员 指定部门 指定角色\\ntype=Condition时不启用'"`</span> <span class="token comment">// 审批人设置</span></span>
<span class="line">	Expression <span class="token builtin">string</span> <span class="token string">`gorm:"column:expression;not null;default:'';comment:'条件判断表达式\\n为1表示true，通过的话直接进入下一步骤'"`</span>            <span class="token comment">// 条件判断表达式</span></span>
<span class="line">	Sort       <span class="token builtin">int</span>    <span class="token string">`gorm:"column:sort;not null;comment:'条件判断顺序'"`</span>                                                      <span class="token comment">// 判断顺序</span></span>
<span class="line"></span>
<span class="line">	FlowID        <span class="token builtin">uint</span>    <span class="token string">`gorm:"column:flow_id"`</span>                         <span class="token comment">// 流程ID</span></span>
<span class="line">	ProcessID     <span class="token builtin">uint</span>    <span class="token string">`gorm:"column:process_id"`</span>                      <span class="token comment">// 当前步骤ID</span></span>
<span class="line">	NextProcessID <span class="token builtin">int</span>     <span class="token string">`gorm:"column:next_process_id;default:2"`</span>       <span class="token comment">// 下一步骤ID</span></span>
<span class="line">	Process       Process <span class="token string">`gorm:"foreignKey:ProcessID;references:id"`</span>     <span class="token comment">// HasOne Process</span></span>
<span class="line">	NextProcess   Process <span class="token string">`gorm:"foreignKey:NextProcessID;references:id"`</span> <span class="token comment">// HasOne NextProcess</span></span>
<span class="line">	Flow          Flow    <span class="token string">`gorm:"foreignKey:FlowID;references:id"`</span>        <span class="token comment">// BelongsTo Flow</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Flowlink</code>模型定义了审批步骤间的关系，Auditor字段指示了审批人信息。</p>
<h3 id="process流程步骤" tabindex="-1"><a class="header-anchor" href="#process流程步骤"><span>Process流程步骤</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Process <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	FlowID           <span class="token builtin">int</span>       <span class="token string">`gorm:"column:flow_id;not null;default:0;comment:'流程id'" json:"flow_id"`</span></span>
<span class="line">	ProcessName      <span class="token builtin">string</span>    <span class="token string">`gorm:"column:process_name;not null;default:'';comment:'步骤名称'" json:"process_name"`</span></span>
<span class="line">	LimitTime        <span class="token builtin">int</span>       <span class="token string">`gorm:"column:limit_time;not null;default:0;comment:'限定时间,单位秒'" json:"limit_time"`</span></span>
<span class="line">	Type             <span class="token builtin">string</span>    <span class="token string">`gorm:"column:type;not null;default:'operation';comment:'流程图显示操作框类型'" json:"type"`</span></span>
<span class="line">	Icon             <span class="token builtin">string</span>    <span class="token string">`gorm:"column:icon;default:'';comment:'流程图显示图标'" json:"icon,omitempty"`</span></span>
<span class="line">	ProcessTo        <span class="token builtin">string</span>    <span class="token string">`gorm:"column:process_to;not null;default:''" json:"process_to"`</span></span>
<span class="line">	Style            <span class="token builtin">string</span>    <span class="token string">`gorm:"column:style;type:text;" json:"style,omitempty"`</span></span>
<span class="line">	StyleColor       <span class="token builtin">string</span>    <span class="token string">`gorm:"column:style_color;not null;default:'#78a300'" json:"style_color"`</span></span>
<span class="line">	StyleHeight      <span class="token builtin">int</span>       <span class="token string">`gorm:"column:style_height;not null;default:30" json:"style_height"`</span></span>
<span class="line">	StyleWidth       <span class="token builtin">int</span>       <span class="token string">`gorm:"column:style_width;not null;default:30" json:"style_width"`</span></span>
<span class="line">	PositionLeft     <span class="token builtin">string</span>    <span class="token string">`gorm:"column:position_left;not null;default:'100px'" json:"position_left"`</span></span>
<span class="line">	PositionTop      <span class="token builtin">string</span>    <span class="token string">`gorm:"column:position_top;not null;default:'200px'" json:"position_top"`</span></span>
<span class="line">	Position         <span class="token builtin">int</span>       <span class="token string">`gorm:"column:position;not null;default:1;comment:'步骤位置：1正常步骤2：转入子流程0：第一步 当为2时 child_flow_id child_after child_back_process 可设置'" json:"position"`</span></span>
<span class="line">	ChildFlowID      <span class="token builtin">int</span>       <span class="token string">`gorm:"column:child_flow_id;not null;default:0;comment:'子流程id'" json:"child_flow_id"`</span></span>
<span class="line">	ChildAfter       <span class="token builtin">int</span>       <span class="token string">`gorm:"column:child_after;not null;default:2;comment:'子流程结束后 1.同时结束父流程 2.返回父流程'" json:"child_after"`</span></span>
<span class="line">	ChildBackProcess <span class="token builtin">int</span>       <span class="token string">`gorm:"column:child_back_process;not null;default:0;comment:'子流程结束后返回父流程进程'" json:"child_back_process"`</span></span>
<span class="line">	Description      <span class="token builtin">string</span>    <span class="token string">`gorm:"column:description;not null;default:'';comment:'步骤描述'" json:"description"`</span></span>
<span class="line">	ProcessVars      <span class="token punctuation">[</span><span class="token punctuation">]</span>Process <span class="token string">`gorm:"many2many:process_vars;" json:"process_vars"`</span></span>
<span class="line">	Flow             Flow</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程步骤定义了流程框架中每一个步骤的相关配置，包含步骤名称，前端步骤展示样式，审批条件等信息</p>
<h3 id="processvar-步骤判断变量记录" tabindex="-1"><a class="header-anchor" href="#processvar-步骤判断变量记录"><span>ProcessVar 步骤判断变量记录</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> ProcessVar <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	ProcessID       <span class="token builtin">int</span>     <span class="token string">`gorm:"column:process_id;not null" json:"process_id"`</span></span>
<span class="line">	FlowID          <span class="token builtin">int</span>     <span class="token string">`gorm:"column:flow_id;not null;comment:'流程id'" json:"flow_id"`</span></span>
<span class="line">	ExpressionField <span class="token builtin">string</span>  <span class="token string">`gorm:"column:expression_field;not null;comment:'条件表达式字段名称'" json:"expression_field"`</span></span>
<span class="line">	Process         Process <span class="token string">`gorm:"foreignKey:ProcessID;references:ID"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存：每一个流程步骤中，如果存在审批变量，则记录流程步骤中的变量信息与Process关系为:Process:ProcessVar=1:n</p>
<h3 id="发起工作流" tabindex="-1"><a class="header-anchor" href="#发起工作流"><span>发起工作流</span></a></h3>
<h3 id="entry模型" tabindex="-1"><a class="header-anchor" href="#entry模型"><span>Entry模型</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Entry <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	Title          <span class="token builtin">string</span>      <span class="token string">`gorm:"column:title;not null;default:''" json:"title" form:"title"`</span></span>
<span class="line">	FlowID         <span class="token builtin">uint</span>        <span class="token string">`gorm:"column:flow_id;not null;default:0" json:"flow_id" form:"flow_id"`</span></span>
<span class="line">	EmpID          <span class="token builtin">uint</span>        <span class="token string">`gorm:"column:emp_id;not null;default:0" json:"emp_id" form:"emp_id"`</span></span>
<span class="line">	ProcessID      <span class="token builtin">uint</span>        <span class="token string">`gorm:"column:process_id;not null;default:0" json:"process_id" form:"process_id"`</span></span>
<span class="line">	Circle         <span class="token builtin">int</span>         <span class="token string">`gorm:"column:circle;not null;default:1" json:"circle" form:"circle"`</span></span>
<span class="line">	Status         <span class="token builtin">int</span>         <span class="token string">`gorm:"column:status;not_null" json:"status" form:"status"`</span></span>
<span class="line">	Pid            <span class="token builtin">int</span>         <span class="token string">`gorm:"column:pid;not null;default:0" json:"pid" form:"pid"`</span></span>
<span class="line">	EnterProcessID <span class="token builtin">int</span>         <span class="token string">`gorm:"column:enter_process_id;not null;default:0" json:"enter_process_id" form:"enter_process_id"`</span></span>
<span class="line">	EnterProcID    <span class="token builtin">int</span>         <span class="token string">`gorm:"column:enter_proc_id;not null;default:0" json:"enter_proc_id" form:"enter_proc_id"`</span></span>
<span class="line">	Child          <span class="token builtin">int</span>         <span class="token string">`gorm:"column:child;not null;default:0" json:"child" form:"child"`</span></span>
<span class="line">	Flow           Flow        <span class="token string">`gorm:"foreignKey:flow_id"`</span> <span class="token comment">// 关联的Flow</span></span>
<span class="line">	Emp            Emp         <span class="token string">`gorm:"foreignKey:emp_id"`</span>  <span class="token comment">// 关联的Emp</span></span>
<span class="line">	Procs          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Proc     <span class="token comment">// HasMany Proc</span></span>
<span class="line">	Process        Process     <span class="token string">`gorm:"foreignKey:process_id"`</span> <span class="token comment">// 关联的Process</span></span>
<span class="line">	EntryDatas     <span class="token punctuation">[</span><span class="token punctuation">]</span>EntryData <span class="token comment">// HasMany EntryData</span></span>
<span class="line">	ParentEntry    <span class="token operator">*</span>Entry      <span class="token string">`gorm:"foreignKey:pid"`</span>              <span class="token comment">// 关联的父Entry</span></span>
<span class="line">	Children       <span class="token punctuation">[</span><span class="token punctuation">]</span>Entry     <span class="token string">`gorm:"foreignKey:pid"`</span>              <span class="token comment">// HasMany Entry, 级联删除</span></span>
<span class="line">	EnterProcess   Process     <span class="token string">`gorm:"foreignKey:enter_process_id"`</span> <span class="token comment">// 关联的进入步骤Process</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>流程实例:流程实例代表发起了一个流程，他表示在框架中新发起了某一个流程。工作流模型定义了流程发起时，每一个流程实例的相关信息，包含流程实例名称，流程实例发起人，流程实例状态，流程实例关联的流程，流程实例关联的流程步骤，流程实例关联的流程步骤变量等信息</p>
</div>
<h3 id="entrydata实例数据模型" tabindex="-1"><a class="header-anchor" href="#entrydata实例数据模型"><span>EntryData实例数据模型</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> EntryData <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	EntryID     <span class="token builtin">int</span>    <span class="token string">`gorm:"column:entry_id;not null;default:0" form:"entry_id" json:"entry_id"`</span></span>
<span class="line">	FlowID      <span class="token builtin">int</span>    <span class="token string">`gorm:"column:flow_id;not null;default:0" form:"flow_id" json:"flow_id"`</span></span>
<span class="line">	FieldName   <span class="token builtin">string</span> <span class="token string">`gorm:"column:field_name;not null;default:''" form:"field_name" json:"field_name"`</span></span>
<span class="line">	FieldValue  <span class="token builtin">string</span> <span class="token string">`gorm:"column:field_value" json:"field_value" form:"field_value" json:"field_value"`</span></span>
<span class="line">	FieldRemark <span class="token builtin">string</span> <span class="token string">`gorm:"column:field_remark;not null;default:''" form:"field_remark" json:"field_remark"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例数据：保存提交流程是的表单数据，表单数据来源于按照template_form动态设计出来的表单字段内容。</p>
<h3 id="执行工作流" tabindex="-1"><a class="header-anchor" href="#执行工作流"><span>执行工作流</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">type</span> Proc <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	EntryID     <span class="token builtin">uint</span>            <span class="token string">`gorm:"column:entry_id;not null" json:"entry_id" form:"entry_id"`</span></span>
<span class="line">	FlowID      <span class="token builtin">int</span>             <span class="token string">`gorm:"column:flow_id;not null;comment:'流程id'" json:"flow_id" form:"flow_id"`</span></span>
<span class="line">	ProcessID   <span class="token builtin">int</span>             <span class="token string">`gorm:"column:process_id;not null;comment:'当前步骤'" json:"process_id" form:"process_id"`</span></span>
<span class="line">	ProcessName <span class="token builtin">string</span>          <span class="token string">`gorm:"column:process_name;not null;default:'';comment:'当前步骤名称'" json:"process_name" form:"process_name"`</span></span>
<span class="line">	EmpID       <span class="token builtin">int</span>             <span class="token string">`gorm:"column:emp_id;not null;comment:'审核人'" json:"emp_id" form:"emp_id"`</span></span>
<span class="line">	EmpName     <span class="token builtin">string</span>          <span class="token string">`gorm:"column:emp_name;default:null;comment:'审核人名称'" json:"emp_name" form:"emp_name"`</span></span>
<span class="line">	DeptName    <span class="token builtin">string</span>          <span class="token string">`gorm:"column:dept_name;default:null;comment:'审核人部门名称'" json:"dept_name" form:"dept_name"`</span></span>
<span class="line">	AuditorID   <span class="token builtin">int</span>             <span class="token string">`gorm:"column:auditor_id;not null;default:0;comment:'具体操作人'" json:"auditor_id" form:"auditor_id"`</span></span>
<span class="line">	AuditorName <span class="token builtin">string</span>          <span class="token string">`gorm:"column:auditor_name;not null;default:'';comment:'操作人名称'" json:"auditor_name" form:"auditor_name"`</span></span>
<span class="line">	AuditorDept <span class="token builtin">string</span>          <span class="token string">`gorm:"column:auditor_dept;not null;default:'';comment:'操作人部门'" json:"auditor_dept" form:"auditor_dept"`</span></span>
<span class="line">	Status      <span class="token builtin">int</span>             <span class="token string">`gorm:"column:status;not null;comment:'当前处理状态 0待处理 9通过 -1驳回\n0：处理中\n-1：驳回\n9：会签'" json:"status" form:"status"`</span></span>
<span class="line">	Content     <span class="token builtin">string</span>          <span class="token string">`gorm:"column:content;default:null;comment:'批复内容'" json:"content" form:"content"`</span></span>
<span class="line">	IsRead      <span class="token builtin">int</span>             <span class="token string">`gorm:"column:is_read;not null;default:0;comment:'是否查看'" json:"is_read" form:"is_read"`</span></span>
<span class="line">	IsReal      <span class="token builtin">bool</span>            <span class="token string">`gorm:"column:is_real;not null;default:1;comment:'审核人和操作人是否同一人'" json:"is_real" form:"is_real"`</span></span>
<span class="line">	Circle      <span class="token builtin">int</span>             <span class="token string">`gorm:"column:circle;not null;default:1" json:"circle" form:"circle"`</span></span>
<span class="line">	Beizhu      <span class="token builtin">string</span>          <span class="token string">`gorm:"column:beizhu;type:text;comment:'备注'" json:"beizhu" form:"beizhu"`</span></span>
<span class="line">	Concurrence carbon<span class="token punctuation">.</span>DateTime <span class="token string">`gorm:"column:concurrence;not null;default:0;comment:'并行查找解决字段， 部门 角色 指定 分组用'" json:"concurrence" form:"concurrence"`</span></span>
<span class="line">	Emp         Emp             <span class="token string">`gorm:"foreignKey:EmpID"`</span>                                                  <span class="token comment">// 关联的Emp</span></span>
<span class="line">	Entry       Entry           <span class="token string">`gorm:"foreignKey:EntryID"`</span>                                                <span class="token comment">// 关联的Entry</span></span>
<span class="line">	Process     Process         <span class="token string">`gorm:"foreignKey:ProcessID"`</span>                                              <span class="token comment">// 关联的Process</span></span>
<span class="line">	Flow        Flow            <span class="token string">`gorm:"foreignKey:FlowID"`</span>                                                 <span class="token comment">// 关联的Flow</span></span>
<span class="line">	SubProcs    <span class="token punctuation">[</span><span class="token punctuation">]</span>Proc          <span class="token string">`gorm:"foreignkey:EntryID;constraint:OnUpdate:CASCADE,OnDelete:NO ACTION"`</span> <span class="token comment">// HasMany Proc</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理明细表:记录每个流程的流转记录，包括审核人、审核状态、审核内容等。</p>
</div></template>


