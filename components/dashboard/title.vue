<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="navbar justify-content-center">
        <h1 >{{ title }}</h1>
    </div>
</template>

<style scoped>
</style>
