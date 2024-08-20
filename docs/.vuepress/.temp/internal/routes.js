export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/contributing.html", { loader: () => import(/* webpackChunkName: "contributing.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/contributing.html.js"), meta: {"title":""} }],
  ["/guides/api.html", { loader: () => import(/* webpackChunkName: "guides_api.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/api.html.js"), meta: {"title":""} }],
  ["/guides/get-started.html", { loader: () => import(/* webpackChunkName: "guides_get-started.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/get-started.html.js"), meta: {"title":"开始"} }],
  ["/guides/hooks.html", { loader: () => import(/* webpackChunkName: "guides_hooks.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/hooks.html.js"), meta: {"title":"框架hook回调"} }],
  ["/guides/models.html", { loader: () => import(/* webpackChunkName: "guides_models.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/models.html.js"), meta: {"title":"框架模型"} }],
  ["/guides/plugins.html", { loader: () => import(/* webpackChunkName: "guides_plugins.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/plugins.html.js"), meta: {"title":""} }],
  ["/guides/preview.html", { loader: () => import(/* webpackChunkName: "guides_preview.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/preview.html.js"), meta: {"title":""} }],
  ["/guides/steps.html", { loader: () => import(/* webpackChunkName: "guides_steps.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/steps.html.js"), meta: {"title":"使用步骤"} }],
  ["/guides/uses.html", { loader: () => import(/* webpackChunkName: "guides_uses.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/uses.html.js"), meta: {"title":"教程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
