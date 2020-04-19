<template>
  <nav v-show="value" class="page-nav">
    <div class="box-layer">
      <div class="nav-list">
        <router-link to="/">首页</router-link>
        <router-link to="/about/">关于我们</router-link>
        <router-link to="/carft/">酿酒工艺</router-link>
        <router-link to="/product/">产品介绍</router-link>
        <!-- {dede:channel type='top' row='4'}
        <a href="[field:typeurl/]">[field:typename/]</a>
        {/dede:channel} -->
      </div>
      <div class="site-info">
        Copyright © 2020<br>  
        All Rights Reserved.<br>
      </div>
      <div class="sns">
        <!-- <a class="icon" href="http://wpa.qq.com/msgrd?v=3&uin=33798896&site=qq&menu=yes" target="_blank"></a> -->
        <a class="icon wechat" data-widget="wechat" href="javascript:;"><img :src="$withBase('/images/wechat.jpg')" /></a>
      </div>
      <a @click="$emit('input', false)" class="close-menu icon"></a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="stylus">
  .page-nav{
    .close-menu{
      cursor: pointer;
    }
    .bg-layer{
      position: fixed;display: none;
      width:100%;height: 100%;
      left:0;top:0;z-index: 100;
      background: #000;
      opacity:0;
    }
    .box-layer{
      position: fixed;
      width: 20%;
      height: 100%;
      right:0;top:0;z-index: 101;
      background: url("/images/nav_bg.jpg");
    }
    &.play{
      .bg-layer{
        display: block;
        opacity:0.5;
      }
      .box-layer{
        display: block;
        left:80%;
      }
    }
    .nav-list{
      font-family: "fzsx";
      padding: 160px 0 60px;
      text-align: center;
    }
    .nav-list a{
      display: block;
      color: #555;
      font-size: 16px;
      text-decoration: none;
      padding: 20px 0;
      font-weight: 700;
      &:hover{
        color:#000;
      }
    }
    .site-info{
      text-align: center;
      font-size: 12px;
      line-height: 24px;
    }
    .box-layer{
      .close-menu{
        position: absolute;right:20px;top:20px;
        &:hover{
          background-color: #999;
          color:#fff;
        }
      }
    }
  }
</style>