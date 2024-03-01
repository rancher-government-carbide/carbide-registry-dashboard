<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col-m4" v-for="product in products" :key="product.Id">
                <div class="card">
                    <img class="card-img-top p-3" style="background-color: #868e96" src="https://k3s.io/img/k3s-logo-dark.svg" >
                    <div class="card-body">
                         <Nuxt-link :to="`/product/${product.Name}`">
                           <h4 class="card-title">{{ product.Name }}</h4>
                         </Nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const products = ref<Product[]>([])
try {
    products.value = await getAllProducts()
    console.log(products.value)
} catch (error) {
    console.error("error:", error);
    // (document.getElementById("error-message") as HTMLParagraphElement).innerText = "error:" + error.message;
}
</script>
