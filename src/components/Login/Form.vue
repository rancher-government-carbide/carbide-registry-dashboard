<template>
  <form id="loginForm">
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>

    <div class="button-container">
      <button type="button" @click="submitForm">Login</button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  methods: {
    async submitForm() {
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;

      try {
          const response = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
          });

          if (response.ok) {
              // Successful login
              const cookies = response.headers.get("Set-Cookie");
              document.cookie = cookies || ""; // Set the received cookie
              window.location.href = "redirect_page.html"; // Redirect to a success page
          } else {
              // Failed login
              (document.getElementById("error-message") as HTMLParagraphElement).innerText = "Invalid username or password.";
          }
      } catch (error) {
          console.error("Error:", error);
          (document.getElementById("error-message") as HTMLParagraphElement).innerText = "An error occurred.";
      }
    }
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
