export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "./", // 设为相对路径，避免在服务器上路径错误
    cdnURL: "/", // 确保静态资源始终从根路径加载
  },
  nitro: {
    publicAssets: [
      {
        dir: "./.output/public/_nuxt",
        baseURL: "/_nuxt/",
      },
    ],
  },
  routeRules: {
    "/**": { prerender: true }, // 预渲染所有页面
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  css: ["~/assets/global.css"],
  tailwindcss: {
    exposeConfig: true,
  },
  site: {
    // nuxt-simple-sitemap - 自动生成sitemap的配置
    url: "https://www.enolight.co/",
  },
  i18n: {
    vueI18n: "./i18n.settings.ts",
    strategy: "no_prefix",
    defaultLocale: "zh",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh.json",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
