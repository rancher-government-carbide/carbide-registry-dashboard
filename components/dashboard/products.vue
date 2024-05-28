<template>
    <div class="container p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
            <div class="col-m4" v-for="product in products" :key="product.Id">
                <Nuxt-link style="text-decoration: none; border-radius: 15px;" class="card shadow border-0 h-100" :to="`/product/${product.Name}`">
                     <img class="card-img-top p-4 mx-auto img-responsive" style="max-width: 9rem; max-height: 9rem;" :src="product.LogoUrl" >
                     <div class="card-body">
                         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     </div>
                     <h4 class="card-footer text-center text-uppercase fw-bold">{{ product.Name }}</h4>
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
