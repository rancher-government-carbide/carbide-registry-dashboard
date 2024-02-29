export async function login(username: string, password: string): Promise<Boolean> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        });
        if (response.ok) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error;
    }
}

export async function userIsAuthorized(): Promise<Boolean> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
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
        throw error
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
        throw error
    }
}
