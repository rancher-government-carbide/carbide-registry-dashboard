<template>
  <div>
      <Suspense>
          <template #default>
              <div>
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
