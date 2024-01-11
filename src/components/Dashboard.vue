<script setup lang="ts">
    import Products from './dashboard/products.vue'
</script>

<template>
    <Suspense>
        <template #default>
            <Products/>
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>
