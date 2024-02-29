<script setup lang="ts">
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
 <div>
     <table class="table">
        <thead>
          <tr>
            <th scope="col">Version</th>
            <th scope="col">Tar</th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody v-for="release in releasesForProduct" :key="release.Id">
            <tr>
              <td>{{ release.Name }}</td>
              <td><a :href="release.TarballLink" target="_blank" class="download-button">Download</a></td>
              <td>{{ release.UpdatedAt }}</td>
            </tr>
        </tbody>
     </table>
 </div>
</template>
