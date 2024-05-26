<template>
  <div>
      <navbar/>
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
</style>
