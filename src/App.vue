<template>
  <div>
    <!-- header -->
    <MyTab></MyTab>
    <!-- content -->
    <!-- footer -->
    <MyTabbar></MyTabbar>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import MyTab from "./components/my-tab";
import MyTabbar from "./components/my-tabbar";
const state = reactive({});
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
