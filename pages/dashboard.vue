<template>
  <div class="page-container">
      <Suspense>
          <template #default>
              <dashboardProducts/>
          </template>
          <template #fallback>
              <span>Loading...</span>
          </template>
      </Suspense>
  </div>
</template>

<style>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
