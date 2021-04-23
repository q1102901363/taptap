<template>
  <header class="my-tab-header">
    <div class="container">
      <div class="main" v-if="route.meta.titleC">
        <ul class="main-list">
          <li class="main-item">
            <router-link
              :to="{ name: route.meta.nameA }"
              active-class="active"
              >{{ route.meta.titleA }}</router-link
            >
          </li>
          <li class="main-item">
            <router-link
              :to="{ name: route.meta.nameB }"
              active-class="active"
              >{{ route.meta.titleB }}</router-link
            >
          </li>
          <li class="main-item">
            <router-link
              :to="{ name: route.meta.nameC }"
              active-class="active"
              >{{ route.meta.titleC }}</router-link
            >
          </li>
          <li class="underline-blue" :class="state.style"></li>
        </ul>
      </div>
      <div class="operation">
        <div class="btn" :class="{ 'active-btn': !route.meta.titleA }">
          <van-icon name="search" size="0.2rem" />
        </div>
        <div class="btn">
          <van-icon name="bulb-o" size="0.2rem" />
        </div>
        <div class="btn">
          <van-icon name="user-circle-o" size="0.2rem" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
const state = reactive({
  style: "actLeft",
});
watch(
  () => route.path,
  () => {
    switch (route.path) {
      case "/":
        state.style = "actLeft";
        break;
      case "/update":
        state.style = "actMid";
        break;
      case "/video":
        state.style = "actRight";
        break;
      case "/forum/follow":
        state.style = "actLeft";
        break;
      case "/forum/hot":
        state.style = "actMid";
        break;
      case "/forum/groups":
        state.style = "actRight";
        break;
    }
  }
);
</script>
<style scoped lang="scss">
.my-tab-header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  .container {
    padding: 0 0.16rem;
    display: flex;
    // align-items: center;
    font-size: 0.16rem;
    .main {
      flex: 1;
      margin-right: 0.2rem;
      line-height: 0.64rem;
      .main-list {
        position: relative;
        display: flex;
        justify-content: space-between;
        .underline-blue {
          position: absolute;
          width: 0.3rem;
          height: 3px;
          display: block;
          content: "";
          background-color: #15c5ce;
          bottom: 0.1rem;
          transition: all 0.4s;
        }
        .actLeft {
          left: 4px;
        }
        .actRight {
          left: 83%;
        }
        .actMid {
          transform: translate(-50%);
          left: 50%;
        }
        .main-item {
          a {
            color: #868c92;
          }
        }
      }
    }
    .operation {
      display: flex;
      margin-top: 0.17rem;
      .btn {
        padding: 5px;
        box-sizing: border-box;
        width: 0.3rem;
        height: 0.3rem;
        margin: 0 0.05rem;
        box-shadow: 0px 2px 3px 1px rgba($color: #000000, $alpha: 0.1);
        border-radius: 0.15rem;
      }
      .active-btn {
        position: relative;
        width: 2.5rem;
        padding-left: 0.1rem;
        box-shadow: 0 0 0 0;
        border: 1px solid #eee;
        background-color: #f5f7f8;
        color: #666;
        &::after {
          position: absolute;
          content: "搜索";
          padding-left: 0.1rem;
          font-size: 0.12rem;
          line-height: 0.18rem;
        }
      }
    }
  }
}
.active {
  font-size: 0.2rem;
  font-weight: 700;
  color: black !important;
}
</style>
