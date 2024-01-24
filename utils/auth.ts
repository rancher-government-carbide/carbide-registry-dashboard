export async function login(username: string, password: string): Promise<User> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        });
        if (response.ok) {
            const loginResult = await response.json()
            return loginResult
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}

export async function register(username: string, password: string) {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        });
        if (response.ok) {
            const registerResult = await response.json()
            return registerResult
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}

// needs to be implemented on backend
export async function logout() {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const logoutResult = await response.json()
            return logoutResult
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}
