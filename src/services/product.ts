export async function getAllProducts() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product`, {
        method: "GET",
        credentials: "include",
    });
    return response
}

export async function getProduct(product: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}`, {
        method: "GET",
        credentials: "include",
    });
    return response
}
