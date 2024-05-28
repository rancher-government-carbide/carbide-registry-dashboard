<script setup lang="ts">
const route = useRoute()
const releaseName = route.params.slug as string
</script>

<template>
<h1 class="p-2 text-uppercase fw-bold">{{ releaseName }}</h1>
</template>

<style scoped>
</style>
