export async function getAllReleases(product: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}/release`, {
        method: "GET",
        credentials: "include",
    });
    return response
}

export async function getRelease(product: string, release: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}/release/${release}`, {
        method: "GET",
        credentials: "include",
    });
    return response
}
