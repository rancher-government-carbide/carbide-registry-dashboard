export async function getAllImages() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/image`, {
        method: "GET",
        credentials: "include",
    });
    return response
}

export async function getImage(imageId: number) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/image/${imageId}`, {
        method: "GET",
        credentials: "include",
    });
    return response
}
