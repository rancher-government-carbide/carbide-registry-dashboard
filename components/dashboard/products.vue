<template>
    <div class="container p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
            <div class="col-m4" v-for="product in products" :key="product.Id">
                <Nuxt-link style="text-decoration: none; border-radius: 15px;" class="card shadow border-0 h-100" :to="`/product/${product.Name}`">
                     <img class="card-img-top p-4 h-100"  :src="product.LogoUrl" >
                     <div class="card-body">
                              <h4 class="card-title text-center text-uppercase fw-bold">{{ product.Name }}</h4>
                     </div>
                </Nuxt-link>
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
