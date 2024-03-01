<script setup lang="ts">
const route = useRoute()
const releaseName = route.params.slug as string
</script>

<template>
<h1>{{ releaseName }}</h1>
</template>

<style scoped>
</style>
