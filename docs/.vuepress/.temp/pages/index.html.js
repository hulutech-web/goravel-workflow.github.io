import comp from "/Users/yh/code/Sites/goland/workflow/goravel-workflow-vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/workflow.png\",\"actions\":[{\"text\":\"开始\",\"link\":\"/guides/get-started.html\",\"type\":\"primary\"},{\"text\":\"API文档\",\"link\":\"/guides/uses.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"高度可定制\",\"details\":\"流程模板，流程字段定义，字段默认值配置\"},{\"title\":\"通用性\",\"details\":\"串行，并行，子流程，审批、驳回、转办\"},{\"title\":\"逻辑解构\",\"details\":\"内置多层级部门、员工，部门经理，部门主管角色，使用时直接模型一对一关联即可快速集成到应用\"},{\"title\":\"页面友好\",\"details\":\"图形化工作流设计，支持拖拽，连线，审批条件，快速构建审批工作流场景\"},{\"title\":\"多场景使用\",\"details\":\"公文审批、请假审批、资金申请等多场景\"},{\"title\":\"Hooks\",\"details\":\"内置多个hooks，高度自由，个性化十足\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present hulu-tech Community\"},\"headers\":[],\"git\":{\"updatedTime\":1723792045000,\"contributors\":[{\"name\":\"袁浩\",\"email\":\"yuanhaozhuzhu@hotmail.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
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
