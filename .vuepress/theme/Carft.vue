<template>
  <div id="page-craft">
    <Header />
    <div class="page-slider">
      <div class="section active">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_01.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title01.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_02.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title02.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_03.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title03.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_04.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title04.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_05.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title05.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="timeline"><img data-method="from" data-vars="{scale:1.2}" data-duration="10" data-position="+=0.45" class="slider-bg" :src="$withBase('/images/craft/bg_06.jpg')" alt=""></div>
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,y:40}" data-position="+=0.45" class="slider-title" :src="$withBase('/images/craft/title06.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:20}" data-stagger="0.05" data-position="-=0.3" class="slider-summary">
            <p>传承白沙五百年烧酒技术，运用固态法工艺古法酿造</p>
            <p>产品属纯糯高粱的小曲清香白酒，其特点：清 . 雅 . 醇 . 净</p>
          </div>
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
  },
  mounted () {

    var $pageSlider = $('.page-slider');
    var $nextSlider = $('.next-slider');
    var $pages = $pageSlider.children()
    $pages.find('.timeline').timeline({paused:true});
    $pageSlider.fullpage({
      navigation: true,
      navigationPosition: 'top',
      afterLoad:function(anchorLink,index){
        $pages.eq(index-1).find('.timeline').timeline('play');
      },
      onLeave:function(index,nextIndex){
        $pages.eq(index-1).find('.timeline').timeline('reverse');
        $pages.eq(nextIndex-1).find('.timeline').timeline('play');
        if(nextIndex == $pageSlider.children().length){
          $nextSlider.addClass("do-up").text("");
        }
        if(nextIndex == 1){
          $nextSlider.removeClass("do-up").text("");
        }
      }
    });
    $nextSlider.on("click",function(){
      if($nextSlider.hasClass("do-up")){
        $.fn.fullpage.moveSectionUp();
      }else{
        $.fn.fullpage.moveSectionDown();
      }
    });
    $pageSlider.css({visibility:'visible'});
  },
  destroyed () {
    $.fn.fullpage.destroy(true);
  }
}
</script>

<style lang="stylus">

#fp-nav.top{
  top: 80%;
  left: 40%;
  margin:0!important;
  width: 100%;
}
#fp-nav.top li{
  float:left;
  height: auto;
  width:auto;
  padding: 20px 8px 8px;
  line-height: 12px;
  margin: 0;
  margin: 0 1%;
}
#fp-nav.top li a.active span{
  background-color: #e32f3d;
}
#fp-nav.top li a span{
  background-color: #fff;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
}
#fp-nav.top .fp-tooltip{
  opacity: 1;width:auto;position: static;
  writing-mode: vertical-rl;letter-spacing: 2px;
  opacity: 0.6;filter: Alpha(Opacity=60);
}
#fp-nav.top li:hover .fp-tooltip,#fp-nav.top a.active+.fp-tooltip{
  opacity: 1;
}
#page-craft .section{width:100%;overflow: hidden;}
#page-craft .slider-bg{
  width:100%;height:100%;margin-left: -50%;
  position: absolute;top:0;left:50%;
}
#page-craft .slider-title{
  width:13.12%;margin-left: -6.56%;
  position: absolute;left:50%;top:50%;
}
#page-craft .slider-summary{
  width:800px;
  position: absolute;
  top:70%;
  left:50%;
  margin-left: -400px;
  text-align: center;
  color:#fff;
  line-height: 36px;
}
</style>