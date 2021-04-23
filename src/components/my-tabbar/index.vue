<template>
  <div>
    <van-tabbar route active-color="red">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/categories" icon="flower-o">发现</van-tabbar-item>
      <van-tabbar-item replace to="/forum" icon="chat-o">动态</van-tabbar-item>
      <van-tabbar-item replace to="/d" icon="upgrade">排行榜</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({});
</script>
<style module lang="scss"></style>
