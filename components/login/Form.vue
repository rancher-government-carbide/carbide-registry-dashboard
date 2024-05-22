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

<style scoped>
form {
    max-width: 300px;
    margin: 0 auto;
    background-color: var(--bg);
    color: var(--text);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: var(--text-light-1); /* Use red for light text */
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid var(--divider-light-2); /* Use light divider */
}

button {
    font-size: 1rem;
    padding: 10px;
    background-color: var(--primary-accent-1);
    color: var(--bg);
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: var(--primary-accent-2); /* Use Medium Blue for hover */
}

.button-container {
    text-align: center;
}
</style>
