<template>
    <form id="loginForm">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" v-model="username" required>
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="password" required>
        </div>

        <div class="button-container">
            <button type="button" @click="submitForm">Login</button>
        </div>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

   const username = ref('');
   const password = ref('');

   async function submitForm() {
       try {
           const response = await fetch("http://localhost:5000/login", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ username: username.value, password: password.value }),
           });

           if (response.ok) {
               const loginResponse = await response.json()
               console.log(loginResponse)
           } else {
               (document.getElementById("error-message") as HTMLParagraphElement).innerText = "Invalid username or password.";
           }
       } catch (error) {
           console.error("Error:", error);
           (document.getElementById("error-message") as HTMLParagraphElement).innerText = "An error occurred.";
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
