<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="home">
    <van-button type="primary">
      {{ t('router.index') }}
    </van-button>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 30px;
  color: var(--color);
}
</style>
