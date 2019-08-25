<template>
  <div id="app">
    <blog-header></blog-header>
    <div class="main-wrapper">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    "blog-header": header,
    "blog-footer":footer
  }
}
</script>

<style>
  @import "assets/css/theme.scss";

  .main-wrapper {
    min-height: 100vh;
  }
</style>
