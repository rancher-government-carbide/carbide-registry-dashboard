<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="navbar justify-content-center bg-body-tertiary">
        <div class="container">
            <Nuxt-Link class="navbar-brand" to="/dashboard">
                <img src="../assets/RGS_Black-pos_sRGB.svg" alt="Logo" height="70" class="d-inline-block align-text-top"</img>
            </Nuxt-Link>
        </div>
    </div>
</template>

<style scoped>
</style>
