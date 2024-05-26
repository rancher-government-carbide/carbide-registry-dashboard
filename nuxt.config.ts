// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/styles/main.scss'],
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    }
})
