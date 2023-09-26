<script setup>
const tabbarList = ref([
  {
    title: '游戏',
    to: '/game',
    icon: 'tabbar-game',
  },
  {
    title: '首页',
    to: '/index',
    icon: 'tabbar-home',
  },
  {
    title: '我的',
    to: '/user',
    icon: 'tabbar-user',
  },
])
</script>

<template>
  <div class="main">
    <div class="main-conten">
      <router-view />
    </div>
    <van-tabbar placeholder route>
      <van-tabbar-item v-for="item in tabbarList" :key="item.to" replace :to="item.to" :name="item.to">
        <template #icon>
          <svg-icon :icon="item.icon" />
        </template>
        <span>{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main-conten {
    flex: 1;
  }
}
</style>
