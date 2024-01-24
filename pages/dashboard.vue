<template>
  <div class="container">
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
