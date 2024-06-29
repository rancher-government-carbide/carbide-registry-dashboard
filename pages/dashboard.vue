<template>
  <div>
      <navbar/>
      <Suspense>
          <template #default>
              <DashboardProducts/>
          </template>
          <template #fallback>
              <span>Loading...</span>
          </template>
      </Suspense>
      <rgsfooter/>
  </div>
</template>

<style>
</style>
