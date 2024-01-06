export async function getAllReleaseImageMappings() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/releaseImageMapping`, {
        method: "GET",
        credentials: "include",
    });
    return response
}
