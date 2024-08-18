<template><div><h1 id="框架hook回调" tabindex="-1"><a class="header-anchor" href="#框架hook回调"><span>框架hook回调</span></a></h1>
<p>框架核心workflow<a href="https://github.com/hulutech-web/goravel-workflow/blob/master/services/workflow/workflow.go" target="_blank" rel="noopener noreferrer">核心</a>是一个工厂单例，使用NewBaseWorkflow创建。</p>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<p>采用go的组合方式，实现2个接口即可，即可获得框架提供的能力，开发者可自行进行实现后续逻辑，如发送审核成功后通知消息，审核失败后的后续处理等等。<br>
接口1-通知发起人：NotifyNextAuditor<br>
接口2-通知下一审批人：NotifySendOne</p>
<h3 id="集成于使用" tabindex="-1"><a class="header-anchor" href="#集成于使用"><span>集成于使用</span></a></h3>
<h4 id="模型关联" tabindex="-1"><a class="header-anchor" href="#模型关联"><span>模型关联</span></a></h4>
<ul>
<li>定义关联模型，本案以User结构为例。</li>
</ul>
<ol>
<li>定义结构体，注入服务,WorkNo,Password为必须</li>
</ol>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">.</span> <span class="token string">"github.com/hulutech-web/goravel-workflow/services/workflow"</span></span>
<span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	orm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name     <span class="token builtin">string</span> <span class="token string">`gorm:"column:name;type:varchar(255);not null" form:"name" json:"name"`</span></span>
<span class="line">	Avatar   <span class="token builtin">string</span> <span class="token string">`gorm:"column:avatar;type:varchar(255);not null" form:"avatar" json:"avatar"`</span></span>
<span class="line">	WorkNo   <span class="token builtin">string</span> <span class="token string">`gorm:"column:workno;not null;unique_index:users_workno_unique" json:"workno" form:"workno"`</span></span>
<span class="line">	Password <span class="token builtin">string</span> <span class="token string">`gorm:"column:password;type:varchar(255);not null" form:"password" json:"password"`</span></span>
<span class="line">	Email    <span class="token builtin">string</span> <span class="token string">`gorm:"column:email;type:varchar(255);not null" form:"email" json:"email"`</span></span>
<span class="line">	Mobile   <span class="token builtin">string</span> <span class="token string">`gorm:"column:mobile;type:varchar(255);not null" form:"mobile" json:"mobile"`</span></span>
<span class="line">	Gender   <span class="token builtin">int</span>    <span class="token string">`gorm:"column:gender;type:varchar(255);not null" form:"gender" json:"gender"`</span></span>
<span class="line">	State    <span class="token builtin">int</span>    <span class="token string">`gorm:"column:state;type:varchar(255);not null" form:"state" json:"state"`</span></span>
<span class="line">	Workflow <span class="token operator">*</span>Workflow <span class="token string">`gorm:"-"`</span></span>
<span class="line">	orm<span class="token punctuation">.</span>SoftDeletes</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>定义接口，实现2个接口</li>
</ol>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">// 通知发起人，在被驳回时调用，或者整个流程结束时调用。</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">NotifySendOne</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"custom ======User %d unpasshook called.\n"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通知下一个审批人，当当前环节的审批人通过时，触发。</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">NotifyNextAuditor</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"custom ======User %d passhook called.\n"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例化workflow" tabindex="-1"><a class="header-anchor" href="#实例化workflow"><span>实例化workflow</span></a></h4>
<ul>
<li>注册workflow，在<code v-pre>app/providers/app_services_provider.go</code>中实例化workflow，并注入hooks</li>
</ul>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">"github.com/hulutech-web/goravel-workflow/services/workflow"</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AppServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	wf <span class="token operator">:=</span> workflow<span class="token punctuation">.</span><span class="token function">NewBaseWorkflow</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// 注册子级的方法到工作流中</span></span>
<span class="line">	user <span class="token operator">:=</span> <span class="token operator">&amp;</span>models<span class="token punctuation">.</span>User<span class="token punctuation">{</span>Workflow<span class="token punctuation">:</span> wf<span class="token punctuation">}</span></span>
<span class="line">	wf<span class="token punctuation">.</span><span class="token function">RegisterHook</span><span class="token punctuation">(</span><span class="token string">"NotifySendOneHook"</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>NotifySendOne<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	wf<span class="token punctuation">.</span><span class="token function">RegisterHook</span><span class="token punctuation">(</span><span class="token string">"NotifyNextAuditorHook"</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>NotifyNextAuditor<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>实现效果
<code v-pre>NotifySendOne</code><br>
当流程执行过程中，流程被驳回时，将自动调用<code v-pre>NotifySendOne</code>方法，传递的id参数为emp.id，表示通知发起人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。<br>
当流程执行过程中，整个流程执行完毕时（所有人都同意），将自动调用<code v-pre>NotifySendOne</code>方法，传递的id参数为emp.id，表示通知发起人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。</li>
</ul>
<p><code v-pre>NotifyNextAuditor</code>
当流程执行过程中，其中某一个环节审批通过时，将自动调用<code v-pre>NotifyNextAuditor</code>方法，传递的id参数为emp.id，表示通知下一个审批人。后续由开发者自行实现逻辑，例如：发送邮件，发送短信，消息推送等。</p>
</div></template>


