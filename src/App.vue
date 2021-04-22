<template>
  <div>
    <!-- 头部区域 -->
    <MyTab/>
    <!-- 内容区域 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- 底部栏 -->
    <MyTabBar/>
  </div>
</template>
<script setup>
  import { reactive } from 'vue'
  import MyTab from './components/my-tab'
  import MyTabBar from './components/my-tabbar'
  const state = reactive({});
</script>
<style module lang="scss">
     
</style>