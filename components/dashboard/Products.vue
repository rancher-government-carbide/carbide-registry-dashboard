<template>
 <div class="product-grid">
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
.product-grid {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 20px;
 padding: 20px;
}

.product-icon {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: var(--bg);
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
 transition: transform 0.3s ease-in-out;
}

.product-icon:hover {
 transform: scale(1.05);
}

.product-icon i {
 font-size: 50px;
 color: var(--primary-accent-1);
}

.product-icon p {
 margin-top: 10px;
 font-size: 20px;
 color: var(--text);
}
</style>
