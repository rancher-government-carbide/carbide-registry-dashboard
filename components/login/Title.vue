<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
<h1>{{ title }}</h1>
</template>


<style scoped>
h1 {
    font-weight: 200;
    font-size: 3.4rem;
    position: relative;
}
</style>
