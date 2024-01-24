<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute()
const releaseName = route.params.slug as string

const releasesForProduct = ref<Release[]>([])
try {
    releasesForProduct.value = await getAllReleases(releaseName)
    console.log(releasesForProduct.value)
} catch (error) {
    console.error("error:", error);
    // (document.getElementById("error-message") as HTMLParagraphElement).innerText = "error:" + error.message;
}
</script>

<template>
 <div class="release-grid">
   <div v-for="release in releasesForProduct" :key="release.Id" class="release-icon">
     <i class="fas fa-cube"></i>
       <p>{{ release.Name }}</p>
   </div>
 </div>
</template>


<style scoped>
.release-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 grid-auto-rows: auto;
 gap: 20px;
 padding: 20px;
 width: 50%;
}

.release-icon {
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

.release-icon:hover {
 transform: scale(1.05);
}

.release-icon i {
 font-size: 50px;
 color: var(--primary-accent-1);
}

.release-icon p {
 margin-top: 10px;
 font-size: 20px;
 color: var(--text);
}
</style>
