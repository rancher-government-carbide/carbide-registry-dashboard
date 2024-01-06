export async function login(username: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    return response
}

export async function register(username: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    return response
}

// needs to be implemented on backend
export async function logout() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        }
    });
    return response
}
