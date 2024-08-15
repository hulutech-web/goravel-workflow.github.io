import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "goravel-workflow",
  description: "基于goravel的workflow审批流框架",
  base: "/goravel-workflow/github.io/",
  repo: 'github.com/hulutech-web/goravel-workflow.github.io',
  theme: defaultTheme({
    logo: "images/workflow.png",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "开始",
        link: "/guides/get-started.html",
      },
      {
        text: "教程",
        // 子菜单
        children: [
          {
            text: "基础使用",
            link: "/guides/uses.html",
          },
          {
            text: "框架模型",
            link: "/guides/models.html",
          },
          {
            text: "使用步骤",
            link: "/guides/steps.html",
          },
          {
            text: "API",
            link: "/guides/api.html",
          },
        ],
      },
      {
        text: "友情链接",
        // 配置跳转链接
        link: "https://github.com/hulutech-web/http_result",
      },
    ],
  }),

  bundler: viteBundler(),
});
