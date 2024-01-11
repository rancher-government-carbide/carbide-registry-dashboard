export async function getAllImages(): Promise<Image[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/image`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const images = await response.json()
            return images
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}

export async function getImage(imageId: number): Promise<Image> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/image/${imageId}`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const image = await response.json()
            return image
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}
