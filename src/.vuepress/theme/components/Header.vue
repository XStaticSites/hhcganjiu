<template>
  <header class="page-header">
    <router-link to="/" class="logo"></router-link>
    <div class="head-right">
      <a class="icon wechat" data-widget="wechat" href="javascript:;"><img :src="$withBase('/images/wechat.jpg')" /></a>
      <a class="icon open-menu" @click="navVisible = true"></a>
    </div>
    <Nav v-model="navVisible" />
  </header>
</template>

<script>
import Nav from './Nav.vue';
export default {
  components: {
    Nav
  },
  data () {
    return {
      navVisible: false
    }
  }
}
</script>

<style lang="stylus">
.page-header{
  background: #fff;
  position: fixed;left:0;top:0;width:100%;height: 80px;z-index: 10;
  .head-right{
    position: absolute;
    right: 0;
    top: 0;
    line-height: 80px;
    padding: 0 2%;
    .icon{
      margin: 0 4px;
      cursor: pointer;
      &.open-menu{
        margin-left: 20px;
      }
    }
    .icon:hover{
      background-color: #999;color:#fff;
    }
  }
}
</style>