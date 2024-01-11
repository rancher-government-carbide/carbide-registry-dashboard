export async function getAllReleases(product: string): Promise<Release[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}/release`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const releases = await response.json()
            return releases
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}

export async function getRelease(product: string, release: string): Promise<Release> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}/release/${release}`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const release = await response.json()
            return release
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}
