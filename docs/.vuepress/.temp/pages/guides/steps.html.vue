<template><div><h1 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h1>
<p>goravel-workflow由前端提供图形化页面生成执行流，<a href="https://github.com/hulutech-web/goravel-workflow-vue" target="_blank" rel="noopener noreferrer">前端框架</a>。</p>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>📖演示</span></a></h3>
<p><img src="@source/.vuepress/public/images/flow_link.png" alt="流程"></p>
<h3 id="定义模板" tabindex="-1"><a class="header-anchor" href="#定义模板"><span>⚒️定义模板</span></a></h3>
<p><img src="@source/.vuepress/public/images/flow_dashboard.png" alt="流程"></p>
<h4 id="模板定义" tabindex="-1"><a class="header-anchor" href="#模板定义"><span>📝模板定义</span></a></h4>
<pre><code>配置模板名称以提供后续直接选择使用。
</code></pre>
<p><img src="@source/.vuepress/public/images/template_define.png" alt="模板"></p>
<h4 id="设计字段" tabindex="-1"><a class="header-anchor" href="#设计字段"><span>🗄️设计字段</span></a></h4>
<pre><code>含有字段类型，字段名称，字段值，字段描述，字段是否必填，提交数据时的校验规则等。
</code></pre>
<p><img src="@source/.vuepress/public/images/field_design.png" alt="字段设计"></p>
<h3 id="创建流程" tabindex="-1"><a class="header-anchor" href="#创建流程"><span>📝创建流程</span></a></h3>
<pre><code>填写流程相关配置信息，并选择模板
</code></pre>
<p><img src="@source/.vuepress/public/images/flow_create.png" alt="创建流程"></p>
<h3 id="设计流程" tabindex="-1"><a class="header-anchor" href="#设计流程"><span>🕹️设计流程</span></a></h3>
<pre><code>创建流程步骤节点，并配置相关信息：节点名称，节点样式，节点权限等信息。
</code></pre>
<p><img src="@source/.vuepress/public/images/flow_link.png" alt="流程设计"></p>
<ul>
<li>常规设置</li>
</ul>
<p><img src="@source/.vuepress/public/images/flow_normal.png" alt="流程设计"></p>
<ul>
<li>条件</li>
</ul>
<p><img src="@source/.vuepress/public/images/flow_condition.png" alt="流程设计"></p>
<ul>
<li>权限</li>
</ul>
<p><img src="@source/.vuepress/public/images/flow_permission.png" alt="流程设计"></p>
<ul>
<li>样式</li>
</ul>
<p><img src="@source/.vuepress/public/images/flow_style.png" alt="流程设计"></p>
<h3 id="保存发布" tabindex="-1"><a class="header-anchor" href="#保存发布"><span>🎊保存发布</span></a></h3>
<p>保存流程后，请点击发布正式发布上线使用，如遇到报错，请仔细检查各节点配置信息是否正确。</p>
<p>默认情况下，系统将根据权限中配置的信息进行查找具体的审批人。</p>
<ul>
<li>授权部门时：查找部门主管</li>
<li>授权员工时：将自动查找该员工</li>
</ul>
</div></template>


