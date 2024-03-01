<template>
  <div>
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
  </div>
</template>
