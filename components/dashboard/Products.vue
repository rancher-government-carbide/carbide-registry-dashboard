<template>
 <div>
   <div v-for="product in products" :key="product.Id" class="product-icon">
     <i class="fas fa-cube"></i>
     <p>{{ product.Name }}</p>
   </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref<Product[]>([])

try {
    products.value = await getAllProducts()
    console.log(products.value)
} catch (error) {
    console.error("error:", error);
    // (document.getElementById("error-message") as HTMLParagraphElement).innerText = "error:" + error.message;
}
</script>

<style scoped>
.release-icon {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 10px;
}

.fa-cube {
 font-size: 24px;
 margin-bottom: 5px;
}
</style>
