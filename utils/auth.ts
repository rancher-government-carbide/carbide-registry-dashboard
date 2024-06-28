export async function login(license: string): Promise<Boolean> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ license: license }),
        });
        if (response.ok) {
            const rawLicenseJson = await response.text()
            localStorage.setItem("license", rawLicenseJson)
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

export async function logout(): Promise<Boolean>{
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            localStorage.removeItem("license")
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}
