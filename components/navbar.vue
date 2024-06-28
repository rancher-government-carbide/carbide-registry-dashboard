<template>
    <div class="navbar justify-content-center bg-body-tertiary">
        <div class="container">
            <Nuxt-Link class="navbar-brand" to="/dashboard">
                <img src="../assets/RGS_Black-pos_sRGB.svg" alt="Logo" height="70" class="d-inline-block align-text-top"</img>
            </Nuxt-Link>

            <div v-if="loggedIn" class="dropdown">
              <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../assets/user.svg" alt="Menu Icon" width="24" height="24">
              </a>
              <div class="dropdown-menu">
                  <li class="dropdown-item custom-disabled">{{ license.CustomerID }}</li>
                  <li><hr class="dropdown-divider"></li>
                  <li class="dropdown-item custom-disabled">Days Left: {{ license.DaysTillExpiry }}</li>
                  <li class="dropdown-item custom-disabled">Node Count: {{ license.NodeCount }} </li>
                  <li><hr class="dropdown-divider"></li>
                  <li class="dropdown-item" @click=logoutButton>Sign Out</li>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* bootstrap's version of disabled greys them out */
.custom-disabled {
    pointer-events: none;
}
</style>

<script setup lang="ts">
    const loggedIn = ref(false);
try {
    loggedIn.value = await userIsAuthorized()
} catch (error) {
    console.error("error:", error);
}

let license
const rawLicenseJson = localStorage.getItem("license")
if (rawLicenseJson !== null) {
    license = JSON.parse(rawLicenseJson)
}


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

onMounted(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
})
</script>
