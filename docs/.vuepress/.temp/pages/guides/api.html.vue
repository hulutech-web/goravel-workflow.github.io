<template><div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<p>流程审批框架集成了有关审批设计及审批审核的API，方便开发者快速集成到现有应用中。<br>
流程流转将根据前面流程设计，产生不同的流向，实现动态流转效果。<br>
框架中还有其他的api接口，如需了解，请查看详情<a href="https://github.com/hulutech-web/goravel-workflow/tree/master/routes" target="_blank" rel="noopener noreferrer">API文档</a></p>
<h3 id="_1-基础" tabindex="-1"><a class="header-anchor" href="#_1-基础"><span>1. 基础</span></a></h3>
<h4 id="部门相关" tabindex="-1"><a class="header-anchor" href="#部门相关"><span>部门相关</span></a></h4>
<p>子部门，树形结构</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">deptCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewDeptController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">"dept"</span><span class="token punctuation">,</span> deptCtrl<span class="token punctuation">)</span> <span class="token comment">//部门增删改查</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"dept/bindmanager"</span><span class="token punctuation">,</span> deptCtrl<span class="token punctuation">.</span>BindManager<span class="token punctuation">)</span> <span class="token comment">//绑定部门主管</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"dept/binddirector"</span><span class="token punctuation">,</span> deptCtrl<span class="token punctuation">.</span>BindDirector<span class="token punctuation">)</span> <span class="token comment">//绑定部门经理</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="员工相关" tabindex="-1"><a class="header-anchor" href="#员工相关"><span>员工相关</span></a></h4>
<p>基础信息，其中绑定用户可以根据实际情况进行修改</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">empCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewEmpController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">"emp"</span><span class="token punctuation">,</span> empCtrl<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"emp/search"</span><span class="token punctuation">,</span> empCtrl<span class="token punctuation">.</span>Search<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"emp/options"</span><span class="token punctuation">,</span> empCtrl<span class="token punctuation">.</span>Options<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"emp/bind"</span><span class="token punctuation">,</span> empCtrl<span class="token punctuation">.</span>BindUser<span class="token punctuation">)</span> <span class="token comment">//绑定用户</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-流程模板-模板字段" tabindex="-1"><a class="header-anchor" href="#_2-流程模板-模板字段"><span>2. 流程模板&amp;模板字段</span></a></h3>
<ul>
<li>模板字段，模板字段提供了基于goravel的字段设计规则，包含文本，数字，文本域，下拉框，单选框，复选框，日期，文件</li>
<li>字段验证，必填，字符串，邮箱，数字，日期，最小长度，最大长度，最大值，最小值，不等于，文件，图片，数字大于0</li>
</ul>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">//模板控件</span></span>
<span class="line">templateformCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewTemplateformController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"template/{id}/templateform"</span><span class="token punctuation">,</span> templateformCtrl<span class="token punctuation">.</span>Index<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"templateform"</span><span class="token punctuation">,</span> templateformCtrl<span class="token punctuation">.</span>Store<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token string">"templateform/{id}"</span><span class="token punctuation">,</span> templateformCtrl<span class="token punctuation">.</span>Update<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token string">"templateform/{id}"</span><span class="token punctuation">,</span> templateformCtrl<span class="token punctuation">.</span>Destroy<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"templateform/{id}"</span><span class="token punctuation">,</span> templateformCtrl<span class="token punctuation">.</span>Show<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//模板</span></span>
<span class="line">templateCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewTemplateController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">"template"</span><span class="token punctuation">,</span> templateCtrl<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 获取审批实例</span></span>
<span class="line"><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>instanceId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-流程发起" tabindex="-1"><a class="header-anchor" href="#_3-流程发起"><span>3. 流程发起</span></a></h3>
<p>发起流程时，将根据之前流程设计中选用的流程模板进行动态匹配提交字段，并根据字段类型，字段验证进行校验
<img src="@source/.vuepress/public/images/flow_send.png" alt="发起流程"></p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">//entry节点</span></span>
<span class="line">entryCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewEntryController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"flow/{id}/entry"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>Create<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"entry"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>Store<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"entry/{id}"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>Show<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"entry/{id}/entrydata"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>EntryData<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-查看流程" tabindex="-1"><a class="header-anchor" href="#_3-1-查看流程"><span>3.1 查看流程</span></a></h4>
<p>首页控制台将看到自身已发起的流程事项
<img src="@source/.vuepress/public/images/flow_mine.png" alt="发起流程"></p>
<h4 id="_3-2-查看进程" tabindex="-1"><a class="header-anchor" href="#_3-2-查看进程"><span>3.2 查看进程</span></a></h4>
<p>点击进程后，可以看到审核进程情况
<img src="@source/.vuepress/public/images/flow_proc.png" alt="发起流程"></p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">procCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewProcController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"proc/{entry_id}"</span><span class="token punctuation">,</span> procCtrl<span class="token punctuation">.</span>Index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-查看提交表单" tabindex="-1"><a class="header-anchor" href="#_3-3-查看提交表单"><span>3.3 查看提交表单</span></a></h4>
<p>点击查看后，可以看到提交审批人提交的相关信息，该表单已添加水印
<img src="@source/.vuepress/public/images/flow_sended.png" alt="发起流程"></p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"entry/{id}"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>Show<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"entry/{id}/entrydata"</span><span class="token punctuation">,</span> entryCtrl<span class="token punctuation">.</span>EntryData<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-流程处理-流转" tabindex="-1"><a class="header-anchor" href="#_4-流程处理-流转"><span>4. 流程处理&amp;流转</span></a></h3>
<p>在待办事项中可以查看到，我的待办审批信息。
<img src="@source/.vuepress/public/images/flow_todo.png" alt="待办"></p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">//	审批流转</span></span>
<span class="line">procCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewProcController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"proc/{entry_id}"</span><span class="token punctuation">,</span> procCtrl<span class="token punctuation">.</span>Index<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-同意与驳回" tabindex="-1"><a class="header-anchor" href="#_5-同意与驳回"><span>5. 同意与驳回</span></a></h3>
<p>上一步骤点击批复后，跳转到页面，填写审批意见，并进行通过或者驳回处理。
<img src="@source/.vuepress/public/images/flow_handler.png" alt="处理"></p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">procCtrl <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewProcController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//同意</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"pass"</span><span class="token punctuation">,</span> procCtrl<span class="token punctuation">.</span>Pass<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//驳回</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">"unpass"</span><span class="token punctuation">,</span> procCtrl<span class="token punctuation">.</span>UnPass<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


