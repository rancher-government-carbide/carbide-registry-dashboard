// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
          }
        ],
        script: [
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
            tagPosition: 'bodyClose'
          }
        ]
      }
    },
    ssr: false,
    css: ['~/assets/styles/main.scss'],
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    }
})
