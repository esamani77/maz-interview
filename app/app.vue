<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | فروشگاه` : "فروشگاه",
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
