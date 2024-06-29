<template>
  <div>
      <navbar/>
      <Suspense>
          <template #default>
              <div class="container">
                <ProductTitle/>
                <ProductReleases/>
              </div>
          </template>
          <template #fallback>
              <span>Loading...</span>
          </template>
      </Suspense>
      <rgsfooter/>
  </div>
</template>
