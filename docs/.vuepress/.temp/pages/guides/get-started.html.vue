<template><div><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h1>
<p><a href="https://github.com/hulutech-web/goravel-workflow" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/https%3A%2F%2Fgithub.com%2Fhulutech-web%2Fgoravel-workflow?label=goravel-workflow&amp;link=https%3A%2F%2Fgithub.com%2Fhulutech-web%2Fgoravel-workflow" alt="Static Badge"></a></p>
<p>golang语言开发， <a href="https://goravel.dev" title="最易上手的golang语言web框架" target="_blank" rel="noopener noreferrer">goravel</a>框架审批流完整解决方案。</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>goravel-workflow为golang语言量身打造的一款继承扩展应用，非常适合开发审批流程场景，面向中小企业、组织、单位提供完善的审批工作流框架，同时提供丰富的hooks回调，满足个性化需求<br>
框架V2版本正在陆续开发中🎉</p>
<p>查看 <a href="https://github.com/hulutech-web/goravel-workflow" target="_blank" rel="noopener noreferrer">goravel-workflow</a>获取更多详情。</p>
<h2 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h2>
<p>goravel-workflow前端采用vue开发，前端代码托管在 <a href="https://github.com/hulutech-web/goravel-workflow-vue" target="_blank" rel="noopener noreferrer">https://github.com/hulutech-web/goravel-workflow-vue</a></p>
<h2 id="详情" tabindex="-1"><a class="header-anchor" href="#详情"><span>详情</span></a></h2>
<p>适用场景：</p>
<ul>
<li>公文审批</li>
<li>任务分发</li>
<li>工作流审批</li>
<li>.....</li>
</ul>
<p>特点：</p>
<ul>
<li>与<a href="https://goravel.dev" title="最易上手的golang语言web框架" target="_blank" rel="noopener noreferrer">goravel</a>框架无缝集成，适配goravel框架表单验证规则，ORM，路由，文件上传等</li>
<li>支持自定义审批节点，节点名称，节点处理人，节点显示样式，图标</li>
<li>支持自定义审批节点关系，采用可视化拖拽方式节点流转路径</li>
<li>支持自定义审批节点权限，根据提交表单信息，动态选择流转线路</li>
<li>支持自定义审批节点处理人，可配置自动选人，可手动指定部门和指定审批人</li>
<li>流程审批单自定义配置，配置字段类型，支持文本，数字，单选，多选，日期，文件，长文本</li>
<li>支持审批单字段验证，可配置，大于，小于，等于，不等于，多选，单选，必填，可配置多条规则</li>
</ul>
<h2 id="审批过程" tabindex="-1"><a class="header-anchor" href="#审批过程"><span>审批过程</span></a></h2>
<ul>
<li>发起审批</li>
<li>审批节点流转，同意，驳回</li>
<li>审批节点处理，条件判断，根据条件自动寻找合适的节点</li>
<li>审批节点反馈，审批记录，</li>
<li>审批节点结束，结束当前，或者进入子流程</li>
</ul>
<h2 id="消息通知" tabindex="-1"><a class="header-anchor" href="#消息通知"><span>消息通知</span></a></h2>
<ul>
<li>提供各节点审批前的hook函数，可自定义消息通知</li>
<li>提供审批节点结束后的hook函数，可自定义消息通知</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">go get github.com/hulutech-web/goravel-workflow</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证"><span>许可证</span></a></h2>
<p><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT</a></p>
</div></template>


