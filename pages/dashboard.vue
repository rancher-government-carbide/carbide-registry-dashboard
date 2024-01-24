<template>
    <Suspense>
        <template #default>
            <dashboardProducts/>
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>
