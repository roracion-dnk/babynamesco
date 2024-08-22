// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss',
    '@/assets/css/base.css',
    '@/assets/css/noscript.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate (titlechunk) {
        return titlechunk ? titlechunk : 'Digitize'
      },
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
          rel: 'stylesheet',
          integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
          crossorigin: 'anonymous'
        },
        { src: '/js/jquery.min.js', type: 'text/javascript', defer: true },
        { src: '/js/jquery.scrolly.min.js', type: 'text/javascript', defer: true },
        { src: '/js/jquery.dropotron.min.js', type: 'text/javascript', defer: true },
        { src: '/js/jquery.scrollex.min.js', type: 'text/javascript', defer: true },
        { src: '/js/browser.min.js', type: 'text/javascript', defer: true },
        { src: '/js/breakpoints.min.js', type: 'text/javascript', defer: true },
        { src: '/js/util.js', type: 'text/javascript', defer: true },
        { src: '/js/main.js', type: 'text/javascript', defer: true }
      ]
    }
  },
  plugins: ['~/plugins/sequelize.js']
})
