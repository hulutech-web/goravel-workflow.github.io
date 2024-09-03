export const themeData = JSON.parse("{\"logo\":\"images/workflow.png\",\"badge\":{\"text\":\"\",\"color\":\"\",\"link\":\"https://img.shields.io/badge/any_text-you_like-blue\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"开始\",\"link\":\"/guides/get-started.html\"},{\"text\":\"教程\",\"children\":[{\"text\":\"基础使用\",\"link\":\"/guides/uses.html\"},{\"text\":\"框架模型\",\"link\":\"/guides/models.html\"},{\"text\":\"使用步骤\",\"link\":\"/guides/steps.html\"},{\"text\":\"API\",\"link\":\"/guides/api.html\"},{\"text\":\"HOOKS\",\"link\":\"/guides/hooks.html\"},{\"text\":\"插件\",\"link\":\"/guides/plugins.html\"},{\"text\":\"附件功能\",\"link\":\"/guides/preview.html\"}]},{\"text\":\"github\",\"link\":\"https://github.com/hulutech-web/goravel-workflow\"},{\"text\":\"工具软件\",\"children\":[{\"text\":\"官方流程\",\"link\":\"http://workflow.xiaohongpao.top/#/auth/login\"},{\"text\":\"工具集\",\"link\":\"/guides/tools.html\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
