export async function getAllReleaseImageMappings(): Promise<ReleaseImageMapping[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/releaseImageMapping`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const releaseImageMapping = await response.json()
            return releaseImageMapping
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}
