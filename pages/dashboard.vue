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
  </div>
</template>

<style>
</style>
