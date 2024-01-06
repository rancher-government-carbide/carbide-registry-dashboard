<template>
 <div>
   <div v-for="release in releases" :key="release.Id" class="release-icon">
     <i class="fas fa-cube"></i>
     <p>{{ release.Name }}</p>
   </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const releases = ref([
 {
   "Id": 1,
   "Name": "anewname",
   "CreatedAt": "2023-05-31T18:26:09Z",
   "UpdatedAt": "2023-10-15T01:40:32Z"
 },
 {
   "Id": 2,
   "Name": "cert-manager",
   "CreatedAt": "2023-06-01T07:02:08Z",
   "UpdatedAt": "2023-06-01T07:02:08Z"
 },
 {
   "Id": 3,
   "Name": "k3s",
   "CreatedAt": "2023-06-01T07:10:38Z",
   "UpdatedAt": "2023-06-01T07:10:38Z"
 },
 {
   "Id": 4,
   "Name": "rke2",
   "CreatedAt": "2023-06-01T07:12:41Z",
   "UpdatedAt": "2023-06-01T07:12:41Z"
 },
 {
   "Id": 5,
   "Name": "neuvector",
   "CreatedAt": "2023-06-01T08:20:57Z",
   "UpdatedAt": "2023-06-01T08:20:57Z"
 },
]);
</script>

<style scoped>
.release-icon {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 10px;
}

.fa-cube {
 font-size: 24px;
 margin-bottom: 5px;
}
</style>
