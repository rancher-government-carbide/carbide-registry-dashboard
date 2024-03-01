<template>
  <div>
      <dashboardTitle title="Products"/>
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
