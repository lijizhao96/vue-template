<template>
  <RouterView v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </RouterView>
</template>
<script setup>
</script>
<style lang="scss" scoped>
</style>