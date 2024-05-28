<template>
    <div class="container">
        <form id="loginForm">
            <div class="form-floating mb-3">
                <input class="form-control" placeholder="Paste your license here..." type="password" id="license" name="license" v-model="license" required>
            </div>
            <div class="center-horizontal">
                <button class="btn btn-primary" type="button" @click="submitForm">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const license = ref('');
async function submitForm() {
    try {
        const authorized = await login(license.value)
        if (authorized) {
            console.debug("navigating to dashboard")
            navigateTo('/dashboard')
        } else {
            console.debug("unauthorized")
            // error popup
        }
    } catch (error) {
        console.error("error:", error);
        // (document.getElementById("error-message") as HTMLParagraphElement).innerText = "An error occurred.";
    }
}
</script>

<style>
.center-horizontal {
    position: relative;
    left: 40%;
}
</style>
