// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },

  devServer: {
    port: 1234,
  },
  // build: {
  //   extractCSS: true,
  // },
  target: "static",
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/global.css"],
  image: {
    screens: {
      md: 576,
      lg: 1024,
    },
  },
  app: {
    head: {
      title: "Peter Mamrukov CIO | CTO | Tech lead",

      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        { name: "url", content: "https://www.mamrukov.com" },
        { name: "og:locale", content: "en_EN" },
        { name: "locale", content: "ru_RU" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // {
        //   href: "https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap",
        //   rel: "stylesheet",
        // },
      ],
    },
  },
});
