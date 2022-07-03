<template>
  <div class="padding">
    <!-- 头部 -->
    <van-nav-bar :title="SwitchToHead" />
    <!-- 主体 -->
    <main>
      <router-view></router-view>
    </main>
    <!-- 底部 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/layout/home">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    SwitchToHead () {
      return this.$route.path === '/layout/home' ? '首页' : '搜索'
    }
  }
}
</script>

<style>
.padding {
  padding: 50px 0;
}
.van-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
