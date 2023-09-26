<script setup>
const props = defineProps({
  // SVG 图标名称或在线URL
  icon: {
    type: String,
    required: true,
  },
})

const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))
</script>

<template>
  <div
    v-if="isOnlineSvg"
    :style="{ '--svg-icon-url': `url(${icon})` }"
    class="svg-icon svg-icon-online"
  />
  <svg
    v-else
    class="svg-icon"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentcolor;
  overflow: hidden;
}

.svg-icon-online {
  background-color: currentcolor;
  mask-image: var(--svg-icon-url);
  mask-size: cover;
  display: inline-block;
}
</style>
