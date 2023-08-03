import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  title: "khanhnguyen@dev",
  description: "Blog",
  base: '/vuepress-blog-gungnir/',

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "khanhnguyen@dev" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "khanhnguyen@dev" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    navbarTitle: "khanhnguyendev@blog /home %",
    repo: "khanhnguyendev/my-blog-gungnir",
    docsDir: "blog",
    docsBranch: "main",

    // hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Nguyen 'Ngo' Khanh",
      avatar: "/img/avatar.jpg",
      description: "is a dev lover",
      sns: {
        email: "career.khanhnguyen@gmail.com",
        linkedin: "khanhnguyendev",
        github: "khanhnguyendev",
        facebook: "khanhnguyendev",
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
    ],

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      // {
      //   text: "Links",
      //   link: "/links/",
      //   icon: "fa-satellite-dish"
      // },
      {
        text: "Profile",
        link: "https://khanhnguyen-is-a.dev/profile",
        icon: "oi-rocket"
      }
    ],

    footer: `
      &copy; <a href="https://khanhnguyen-is-a.dev" target="_blank">khanhnguyen@dev</a> 2023
      <br>
      Made with ♥ khanhnguyen@dev
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
