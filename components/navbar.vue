<template>
    <div class="navbar justify-content-center bg-body-tertiary">
        <div class="container">
            <Nuxt-Link class="navbar-brand" to="/dashboard">
                <img src="../assets/RGS_Black-pos_sRGB.svg" alt="Logo" height="70" class="d-inline-block align-text-top"</img>
            </Nuxt-Link>
            <button class="btn btn-primary" @click="logoutButton">Sign out</button>
        </div>
    </div>
</template>

<script setup lang="ts">
async function logoutButton() {
    try {
        const success = await logout()
        if (success) {
            console.debug("navigating to /")
            navigateTo('/')
        } else {
            console.debug("logout failed")
        }
    } catch (error) {
        console.error("error:", error);
    }
}
</script>
