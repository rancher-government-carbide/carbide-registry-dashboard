<template>
    <select class="form-select form-select-lg m-2" v-model="selectedReleaseName" >
        <option v-for="release in releasesForProduct" :value="release.Name">
            <h2 class="d-flex justify-content-between">
                    {{ release.Name }}
                    <IconsDownload url="https://claytonc.dev"/>
            </h2>
        </option>
    </select>
    <ProductImages class="m-3" v-if="selectedReleaseName !== null" :key="selectedReleaseName" :product="productName" :release="selectedReleaseName"></ProductImages>
</template>


<script setup lang="ts">
const route = useRoute()
const productName = route.params.slug as string
const releasesForProduct = ref<Release[]>([])
const selectedReleaseName = ref<string | null>(null);

onMounted(async () => {
    try {
        releasesForProduct.value = await getAllReleases(productName);
        if (releasesForProduct.value.length > 0) {
            selectedReleaseName.value = releasesForProduct.value[0].Name;
        }
    } catch (error) {
        console.error("error:", error);
    }
});
</script>
