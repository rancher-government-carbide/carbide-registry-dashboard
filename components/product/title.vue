<script setup lang="ts">
const route = useRoute()
const releaseName = route.params.slug as string
</script>

<template>
<h1>{{ releaseName }}</h1>
</template>

<style scoped>
h1 {
    font-weight: 200;
    font-size: 3.4rem;
    position: relative;
}
</style>
