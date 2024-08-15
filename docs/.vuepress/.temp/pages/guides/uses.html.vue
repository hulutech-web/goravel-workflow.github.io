<template><div><h1 id="教程" tabindex="-1"><a class="header-anchor" href="#教程"><span>教程</span></a></h1>
<h3 id="系统安装" tabindex="-1"><a class="header-anchor" href="#系统安装"><span>系统安装</span></a></h3>
<p>审批流框架基于最新的goravel进行适配，版本号为v1.1.14，请在安装完goravel后，在进行框架集成操作。goravel安装请访问<a href="https://www.goravel.dev/zh/" target="_blank" rel="noopener noreferrer">goravel官网</a>，使用文档：<a href="https://hulutech-web.github.io/goravel-workflow.github.io/" target="_blank" rel="noopener noreferrer">文档</a></p>
<h4 id="_1-安装扩展" tabindex="-1"><a class="header-anchor" href="#_1-安装扩展"><span>1. 安装扩展</span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">go</span> get  github<span class="token punctuation">.</span>com<span class="token operator">/</span>hulutech<span class="token operator">-</span>web<span class="token operator">/</span>goravel<span class="token operator">-</span>workflow</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h5 id="_1-1-注册服务提供者-config-app-go" tabindex="-1"><a class="header-anchor" href="#_1-1-注册服务提供者-config-app-go"><span>1.1 注册服务提供者:config/app.go</span></a></h5>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">import</span>	<span class="token string">"github.com/hulutech-web/goravel-workflow"</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token string">"providers"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>foundation<span class="token punctuation">.</span>ServiceProvider<span class="token punctuation">{</span></span>
<span class="line">	<span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line">	<span class="token operator">&amp;</span>workflow<span class="token punctuation">.</span>ServiceProvider<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-启动goravel项目" tabindex="-1"><a class="header-anchor" href="#_1-2-启动goravel项目"><span>1.2 启动goravel项目</span></a></h5>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">go run <span class="token builtin class-name">.</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="发布资源" tabindex="-1"><a class="header-anchor" href="#发布资源"><span>发布资源</span></a></h3>
<p>默认将发布2类资源，一是配置文件，而是数据表迁移</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan vendor<span class="token punctuation">:</span>publish <span class="token operator">--</span><span class="token keyword">package</span><span class="token operator">=</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>hulutech<span class="token operator">-</span>web<span class="token operator">/</span>goravel<span class="token operator">-</span>workflow</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-模型映射资源config-workflow-go" tabindex="-1"><a class="header-anchor" href="#_1-模型映射资源config-workflow-go"><span>1. 模型映射资源<code v-pre>config/workflow.go</code></span></a></h4>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">config <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	config<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"workflow"</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span></span>
<span class="line">		<span class="token string">"Dept"</span><span class="token punctuation">:</span> <span class="token string">"Department"</span><span class="token punctuation">,</span> <span class="token comment">//部门关联应用中的模型</span></span>
<span class="line">		<span class="token string">"Emp"</span><span class="token punctuation">:</span>  <span class="token string">"User"</span><span class="token punctuation">,</span>       <span class="token comment">//员工关联应用中的模型</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：如果在集成前已经定义了有关用户与部门模型，那么请在该配置中进行修改，关联关系为1:1关系。</p>
<h4 id="_2-数据库迁移-goravel-database" tabindex="-1"><a class="header-anchor" href="#_2-数据库迁移-goravel-database"><span>2. 数据库迁移，goravel/database</span></a></h4>
<p>流程框架将发布的迁移sql文件，seeder填充文件，发布到该路径下，请根据需要自行修改。</p>
<h4 id="_3-运行数据库迁移" tabindex="-1"><a class="header-anchor" href="#_3-运行数据库迁移"><span>3. 运行数据库迁移</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan migrate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>goravel命令将创建有关流程框架的所有表结构，默认带有测试数据，如需要查看测试数据，请运行</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan migrate:fresh <span class="token parameter variable">--seed</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3>
<p>默认采用<code v-pre>api</code>路由，请在集成时注意路由冲突问题，并酌情修改。详情<a href="https://github.com/hulutech-web/goravel-workflow/tree/master/routes" target="_blank" rel="noopener noreferrer">路由</a></p>
<h3 id="表单验证规则" tabindex="-1"><a class="header-anchor" href="#表单验证规则"><span>表单验证规则</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> rules</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">"github.com/goravel/framework/contracts/validation"</span></span>
<span class="line">	<span class="token string">"strings"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> AlphaRule <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Signature The name of the rule.</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AlphaRule<span class="token punctuation">)</span> <span class="token function">Signature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token string">"alpha_rule"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Passes Determine if the validation rule passes.</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AlphaRule<span class="token punctuation">)</span> <span class="token function">Passes</span><span class="token punctuation">(</span>data validation<span class="token punctuation">.</span>Data<span class="token punctuation">,</span> val any<span class="token punctuation">,</span> options <span class="token operator">...</span>any<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> val <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ch <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token char">'a'</span> <span class="token operator">&lt;=</span> ch <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token char">'z'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token char">'A'</span> <span class="token operator">&lt;=</span> ch <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token char">'Z'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Message Get the validation error message.</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AlphaRule<span class="token punctuation">)</span> <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token string">"字符 :attribute 必须是英文字符或者包含下划线"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>goravel命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan make:rule AlphaRule</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并将该代码复制到规则文件中。</p>
<h3 id="注册规则" tabindex="-1"><a class="header-anchor" href="#注册规则"><span>注册规则</span></a></h3>
<p>在<code v-pre>app/providers/validation_service_provider.go</code>中注册该规则。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ValidationServiceProvider<span class="token punctuation">)</span> <span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>validation<span class="token punctuation">.</span>Rule <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>validation<span class="token punctuation">.</span>Rule<span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">&amp;</span>rules<span class="token punctuation">.</span>AlphaRule<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


