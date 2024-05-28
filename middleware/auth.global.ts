export default defineNuxtRouteMiddleware(async (to, from) => {
    const authorized = await userIsAuthorized()
    if (to.path === '/' || to.path === '/login') {
        if (authorized) {
            return navigateTo('/dashboard')
        }
    } else {
        if (!authorized) {
            return navigateTo('/login')
        }
    }
})
