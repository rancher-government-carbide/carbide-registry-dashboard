export async function getAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const products = await response.json()
            return products
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}

export async function getProduct(product: string): Promise<Product> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${product}`, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const product = await response.json()
            return product
        } else {
            throw new Error("invalid response from server");
        }
    } catch (error) {
        throw new Error("HTTP request failed");
    }
}
