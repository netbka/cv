// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 1234,
  },

  target: "static",
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      title: "Peter Mamrukov | CV",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        //{ name: "google-site-verification", content: "uXK0HHaPvvfo536fFBdCTgJRLl57jaLZmssNa9g6U" },
        { name: "url", content: "https://www.mamrukov.com" },
        { name: "og:locale", content: "en_EN" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        {
          href: "https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
