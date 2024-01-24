// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/main.css'],
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    }
})
