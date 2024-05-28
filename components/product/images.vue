<template>
 <div class="table-responsive">
     <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Signed</th>
            <th scope="col">TrivySigned</th>
            <th scope="col">TrivyValid</th>
            <th scope="col">SbomSigned</th>
            <th scope="col">SbomValid</th>
            <th scope="col">LastScannedAt</th>
            <th scope="col">LastUpdate</th>
          </tr>
        </thead>
        <tbody v-for="image in images" :key="image.Id">
            <tr>
              <td>{{ image.ImageName }}</td>
              <td>{{ image.ImageSigned }}</td>
              <td>{{ image.TrivySigned }}</td>
              <td>{{ image.TrivyValid }}</td>
              <td>{{ image.SbomSigned }}</td>
              <td>{{ image.SbomValid }}</td>
              <td>{{ image.LastScannedAt }}</td>
              <td>{{ image.UpdatedAt }}</td>
            </tr>
        </tbody>
     </table>
 </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: { type: String, required: true },
  release: { type: String, required: true }, 
})
const images = ref<Image[]>([])
try {
    let release = await getRelease(props.product, props.release)
    images.value = release.Images
    console.log(release.Images)
} catch (error) {
    console.error("error:", error);
}
</script>
