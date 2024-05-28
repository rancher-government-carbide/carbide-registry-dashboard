<template>
    <div class="card shadow p-2">
        <div class="card-body">
            <h3 class="card-title text-center fw-bold">Sign In</h3>
            <form id="loginForm">
                <div class="form-floating mb-3 m-4">
                    <input type="password" class="form-control" id="floatingInput" placeholder="license" v-model="license" required>
                    <label for="floatingInput">Enter your license</label>
                </div>
            </form>
            <div class="center-horizontal">
                <button class="btn btn-primary" type="button" @click="submitForm">Login</button>
            </div>
            <div v-if="errorMessage" class="text-danger text-center mt-2">{{ errorMessage }}</div>
        </div> 
    </div>
</template>

<script setup lang="ts">
const license = ref('');
const errorMessage = ref('');
async function submitForm() {
    try {
        const authorized = await login(license.value)
        if (authorized) {
            console.debug("navigating to dashboard")
            navigateTo('/dashboard')
        } else {
            console.debug("unauthorized")
            errorMessage.value = "Invalid license. Please try again.";
        }
    } catch (error) {
        console.error("error:", error);
        errorMessage.value = "An error occurred while processing your request. Please try again later.";
    }
}
</script>

<style>
.center-horizontal {
    position: relative;
    left: 40%;
}
</style>
