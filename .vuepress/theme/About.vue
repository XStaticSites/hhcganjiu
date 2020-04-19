<template>
  <div id="page-about">
    <Header />
    <div class="banner-base"><img :src="$withBase('/images/about/about_02.jpg')" alt=""></div>
    <div class="wrapper">
      <div class="info-list">
        <div class="item">
          <img :src="$withBase('/images/about/about_03.jpg')" alt="">
          <div class="title">厂区环境</div>
          <div class="summary">优雅宁静的厂区，远离那喧嚣的都市，只为匠心酿造一壶老酒</div>
        </div>
        <div class="item">
          <img :src="$withBase('/images/about/about_05.jpg')" alt="">
          <div class="title">车间一隅</div>
          <div class="summary">干净整洁的车间，严格把关每一道酿造工序</div>
        </div>
        <div class="item">
          <img :src="$withBase('/images/about/about_07.jpg')" alt="">
          <div class="title">车间一隅</div>
          <div class="summary">窖藏老酒，只有经过时间的考验，方能成就红花村甘酒</div>
        </div>
        <div class="item">
          <img :src="$withBase('/images/about/about_09.jpg')" alt="">
          <div class="title">生产装瓶中</div>
          <div class="summary">经过灌装和精美包装过后,一瓶纯糯高粱小曲清香白酒即将送到你的餐桌上</div>
        </div>
      </div>
    </div>
    <div id="contact" class="banner-base" style="margin: 100px 0;"><img :src="$withBase('/images/about/about_15.jpg')" alt=""></div>
    <div class="tc" style="margin-bottom:-36px;"><img :src="$withBase('/images/about/about_18.png')" alt=""></div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">

#page-about body{
  background: url("/images/index_bg.jpg") center 80px;
}
#page-about .info-list{
  overflow: hidden;
  margin: -60px 0 0 -60px;
  position: relative;
  z-index: 2;
}
#page-about .info-list .item{
  float:left;
  text-align:center;
  width: 256px;
  margin-left: 59px;
  background: #fff;
}
#page-about .info-list .title{font-size: 22px;color:#be2e38;padding: 20px 0;}
#page-about .info-list .item .summary{
  height: 72px;line-height: 24px;padding:0 40px 20px;font-size: 14px;
}
</style>