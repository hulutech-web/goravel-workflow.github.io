import comp from "/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/guides/feature.html.vue"
const data = JSON.parse("{\"path\":\"/guides/feature.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"特性\",\"slug\":\"特性\",\"link\":\"#特性\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guides/feature.md\"}")
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
