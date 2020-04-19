<template>
  <div id="page-zp">
    <Header />
    <div class="banner-base"><img :src="$withBase('/images/zs_02.jpg')" alt=""></div>
    <div class="wrapper">
      <div class="page-detail">
        <div class="content fs14">
          <div class="fs22 tc" style="margin:30px 0 20px;"><span class="cl-red">经销代理</span>招商加盟</div>
          <div class="tc">平凡不平淡--安逸而精彩的生活态度<br>甘大哥致力于用纯粹的产品品质和品牌、渠道运营能力与经销代理合作共赢共同发展</div>
          <div style="width:30px;background-color:#e1444f;height:1px;margin:10px auto;"></div>
          <div class="cl-red tc">重庆江津红花村甘酒有限公司招商咨询热线</div>
          <div class="cl-red fs20 tc">023-47339399 / 13808354045</div>
          <div style="margin: 60px auto;"><img style="vertical-align:top;" :src="$withBase('/images/zs_05.png')" alt=""></div>
        </div>
      </div>
    </div>
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