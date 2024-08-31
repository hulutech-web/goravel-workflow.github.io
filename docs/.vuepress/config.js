import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "goravel-workflow",
  description: "基于goravel的workflow审批流框架",
  base: "/goravel-workflow.github.io/", // 注意结尾的斜杠
  theme: defaultTheme({
    logo: "images/workflow.png",
    badge: {
      text: '', 
      color: '', 
      link: 'https://img.shields.io/badge/any_text-you_like-blue' 
    },
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
          {
            text: "HOOKS",
            link: "/guides/hooks.html",
          },
          {
            text: "插件",
            link: "/guides/plugins.html",
          },
          {
            text: "附件功能",
            link: "/guides/preview.html",
          },
        ],
      },
      {
        text: "github",
        link: "https://github.com/hulutech-web/goravel-workflow",
      },
      {
        text: "工具软件",
        children:[
          {
            text: "官方流程",
            link: "http://workflow.xiaohongpao.top/#/auth/login",
          },
          {
            text: "工具集",
            link: "/guides/tools.html",
          },
        ]
      },
    ],
  }),
  bundler: viteBundler(),
});
