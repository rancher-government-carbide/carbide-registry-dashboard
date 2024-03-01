<template>
    <div class="accordion" id="accordion">
      <div class="accordion-item" v-for="release in releasesForProduct" :key="release.Id">
        <h2 class="accordion-header">
            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             {{ release.Name }}
            </button>
        </h2>
        <ProductImages :product="productName" :release="release.Name"></ProductImages>
      </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const productName = route.params.slug as string
const releasesForProduct = ref<Release[]>([])
try {
    releasesForProduct.value = await getAllReleases(productName)
    console.log(releasesForProduct.value)
} catch (error) {
    console.error("error:", error);
    // (document.getElementById("error-message") as HTMLParagraphElement).innerText = "error:" + error.message;
}
// <td><a :href="image.TarballLink" target="_blank" class="download-button">Download</a></td>
</script>
