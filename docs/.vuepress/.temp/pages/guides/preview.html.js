import comp from "/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/preview.html.vue"
const data = JSON.parse("{\"path\":\"/guides/preview.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"附件功能（开发中）\",\"slug\":\"附件功能-开发中\",\"link\":\"#附件功能-开发中\",\"children\":[{\"level\":3,\"title\":\"内容预览\",\"slug\":\"内容预览\",\"link\":\"#内容预览\",\"children\":[]},{\"level\":3,\"title\":\"PDF归档\",\"slug\":\"pdf归档\",\"link\":\"#pdf归档\",\"children\":[]}]}],\"git\":{\"updatedTime\":1724319432000,\"contributors\":[{\"name\":\"袁浩\",\"email\":\"yuanhaozhuzhu@hotmail.com\",\"commits\":2}]},\"filePathRelative\":\"guides/preview.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
