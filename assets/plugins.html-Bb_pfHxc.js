import{_ as n,c as s,o as a,b as t}from"./app-CK0UTPTA.js";const e="/goravel-workflow.github.io/assets/plugin-CO7__El8.png",l={},i=t(`<h2 id="插件-开发中" tabindex="-1"><a class="header-anchor" href="#插件-开发中"><span>插件（开发中）</span></a></h2><p>问题：流程框架在各个处理环节，一般情况下是无法对最初的流程设计进行更改的。<br> 场景： 任务分配流程： 在最初设计流程时，部门涉及到有 3 层结构，流程的方向是从高级部门到低级部门，流程需要在第二层部门时，把权限分配给第二层部门的审批人，第二层审批可以直接对流程中携带的数据进行二次处理。</p><ul><li>插件 goravel-workflow 提供了插件机制，允许用户开发者自定义插件，并集成到框架中，实现自定义功能。</li><li>自主性 同时，插件可以绑定到某一个流程上的某一个环节上，该环节的设计交由开发者自行完成。</li></ul><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h3><ul><li>资金拨付审批<br> 上级部门将资金拨付给下级部门后，希望由 2 级部门能够自主地将资金分配给 3 级部门，例如三级部门有 10 个，总的资金是 100 万元，现在二级部门就可以根据实际情况分配这100万到各个子部门了。<br> 由下级部门自主决定，这种场景下，下级部门的分配情况可能如下：</li></ul><table><thead><tr><th style="text-align:left;">部门</th><th style="text-align:center;">人数</th><th style="text-align:center;">分配金额（万元）</th></tr></thead><tbody><tr><td style="text-align:left;">部门一</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:left;">部门二</td><td style="text-align:center;">12</td><td style="text-align:center;">12</td></tr><tr><td style="text-align:left;">部门...</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><ul><li>流程携带新的数据 当2级部门将数据进行分配后，3级部门只能获得分配给自身的资金，而不能查看或者使用其他的资金</li></ul><h3 id="官方插件" tabindex="-1"><a class="header-anchor" href="#官方插件"><span>官方插件</span></a></h3><h4 id="🦁数量分配插件-官方" tabindex="-1"><a class="header-anchor" href="#🦁数量分配插件-官方"><span>🦁数量分配插件(官方)</span></a></h4><p>针对如上需求，框架提供了任务分配插件，通过artisan 命令进行发布资源，并自动集成到框架中<br> 官方定义了一个插件收集器，并新建了插件表和插件配置表，当注册官方插件后，2张表将自动生成</p><ul><li>内置官方插件 <code>app_service_provider.go</code> 中定义了官方插件</li></ul><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span>	<span class="token string">&quot;github.com/hulutech-web/goravel-workflow/services/workflow/official_plugins&quot;</span></span>
<span class="line"></span>
<span class="line">op <span class="token operator">:=</span> official_plugins<span class="token punctuation">.</span><span class="token function">NewDistributePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">cl <span class="token operator">:=</span> workflow<span class="token punctuation">.</span><span class="token function">NewCollector</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>workflow<span class="token punctuation">.</span>Plugin<span class="token punctuation">{</span>op<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">cl<span class="token punctuation">.</span><span class="token function">RegisterPlugin</span><span class="token punctuation">(</span><span class="token string">&quot;DistributePlugin&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插件作用 插件是安装到某一个流程上，且在流程的某一个步骤上，由使用者去新建插件规则<br> 例如将经费，分配给某些部门，每个部门的具体金额配置</li><li>具体效果 当完成某一个审批之后，流程流转之前，运行官方提供的插件，插件名称必须为:&quot;DistributePlugin&quot;</li></ul><h4 id="🦁api" tabindex="-1"><a class="header-anchor" href="#🦁api"><span>🦁API</span></a></h4><p>系统提供了有关插件的几个api方法</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">//1、命令行新建一个插件</span></span>
<span class="line"><span class="token comment">//2、开发者通过设计，设计出该插件的一些选项和规则</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">&quot;api/plugin/product&quot;</span><span class="token punctuation">,</span> distributeCtrl<span class="token punctuation">.</span>Product<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//3、为流程选择某些插件</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">&quot;api/flow/select_plugins&quot;</span><span class="token punctuation">,</span> distributeCtrl<span class="token punctuation">.</span>SelectPlugins<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//4、获取系统中已有的插件</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;api/plugin/list&quot;</span><span class="token punctuation">,</span> distributeCtrl<span class="token punctuation">.</span>List<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🛠插件开发" tabindex="-1"><a class="header-anchor" href="#🛠插件开发"><span>🛠插件开发</span></a></h4><p>框架提供了插件机制，允许用户开发者自定义插件，并集成到框架中，实现自定义功能。</p><ul><li>artisan 命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run .artisan make:plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>根据提示填写插件需要的相关配置，系统将根据插件信息新建插件记录</p><ul><li>注册插件 <code>app_service_provider.go</code>中注册开发定义的插件</li></ul><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">myop <span class="token operator">:=</span> my_plugins<span class="token punctuation">.</span><span class="token function">NewDistributePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">cl <span class="token operator">:=</span> workflow<span class="token punctuation">.</span><span class="token function">NewCollector</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>workflow<span class="token punctuation">.</span>Plugin<span class="token punctuation">{</span>myop<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">cl<span class="token punctuation">.</span><span class="token function">RegisterPlugin</span><span class="token punctuation">(</span><span class="token string">&quot;MyPlugin&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插件开发（官方） 插件功能允许开发者在某一个流程的某一个步骤上，对提交表单中的某一个数据进行二次分配，例如经费的分配，分配到指定的部门上。</li></ul><p><img src="`+e+'" alt="分配设计"></p>',25),p=[i];function o(c,u){return a(),s("div",null,p)}const d=n(l,[["render",o],["__file","plugins.html.vue"]]),g=JSON.parse('{"path":"/guides/plugins.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"插件（开发中）","slug":"插件-开发中","link":"#插件-开发中","children":[{"level":3,"title":"场景","slug":"场景","link":"#场景","children":[]},{"level":3,"title":"官方插件","slug":"官方插件","link":"#官方插件","children":[]}]}],"git":{"updatedTime":1724313995000,"contributors":[{"name":"袁浩","email":"yuanhaozhuzhu@hotmail.com","commits":4}]},"filePathRelative":"guides/plugins.md"}');export{d as comp,g as data};
