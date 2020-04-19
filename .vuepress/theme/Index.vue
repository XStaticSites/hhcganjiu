<template>
  <div id="page-index">
    <Header />
    <div class="page-slider">
      <div class="section active">
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,x:100}" data-position="+=0.45" class="home_img2 bg" :src="$withBase('/images/home_img2.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:100}" data-position="-=0.4" class="cup" :src="$withBase('/images/cup.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:100}" data-position="-=0.4" class="cup cup2" :src="$withBase('/images/cup.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,scale:0.4,ease:Back.easeOut}" class="gdg" :src="$withBase('/images/gdg.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:20}" class="home_img4" :src="$withBase('/images/home_img4.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,y:100}" data-position="-=0.4" class="home_img3" :src="$withBase('/images/home_img3.png')" alt="">
        </div>
      </div>
      <div class="section">
        <div class="timeline">
          <img data-method="from" data-vars="{alpha:0,x:60}" data-position="+=0.45" class="index_2_2" :src="$withBase('/images/index_2_2.png')" alt="">
          <div data-method="staggerFrom" data-vars="{alpha:0,y:-60}" data-stagger="0.1" data-position="-=0.2" class="home_text1">
            <img :src="$withBase('/images/index_2_7.png')" alt="">
            <img :src="$withBase('/images/index_2_6.png')" alt="">
            <img :src="$withBase('/images/index_2_3.png')" alt="">
            <img :src="$withBase('/images/index_2_4.png')" alt="">
            <img :src="$withBase('/images/index_2_5.png')" alt="">
          </div>
          <img data-method="from" data-vars="{alpha:0,x:-60}" data-position="-=0.4" class="home_img2_1" :src="$withBase('/images/home_img2.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:-60}" data-position="-=0.4" class="home_img2_4" :src="$withBase('/images/home_img2_4.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:-60}" data-position="-=0.4" class="home_img2_5" :src="$withBase('/images/home_img2_5.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:-60}" data-position="-=0.4" class="home_img2_2" :src="$withBase('/images/home_img2_2.png')" alt="">
          <img data-method="from" data-vars="{alpha:0,x:-60}" data-position="-=0.4" class="home_img2_3" :src="$withBase('/images/home_img2_3.png')" alt="">
        </div>
      </div>
    </div>
    <a href="javascript:;" class="icon next-slider">
      <span class="down"></span>
      <span class="up"></span>
    </a>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header,
  },
  mounted () {
    var $pageSlider = $('.page-slider');
    var $nextSlider = $('.next-slider');
    var $pages = $pageSlider.children()
    $pages.find('.timeline').timeline({paused:true});
    $pageSlider.fullpage({
      afterLoad:function(anchorLink,index){
        $pages.eq(index-1).find('.timeline').timeline('play');
      },
      onLeave:function(index,nextIndex){
        $pages.eq(index-1).find('.timeline').timeline('reverse');
        $pages.eq(nextIndex-1).find('.timeline').timeline('play');
        if(nextIndex == $pageSlider.children().length){
          $nextSlider.addClass("do-up");
        }
        if(nextIndex == 1){
          $nextSlider.removeClass("do-up");
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
#page-index{
  background: url("/images/index_bg.jpg") center 80px; 
  .page-slider{
    visibility: hidden;
  }
  .home_text1{
    font-family: "microsoft yahei";
    font-size: 12px;
    line-height: 26px;
    height:280px;
    position: absolute;
    right: 17%;
    top:50%;
    margin: -140px 0 0 -200px;
    width: 12.5%;
  }
  .home_img2{
    width: 20%;
    position: absolute;left:10%;top:50%;margin-top:-20%;
  }
  .home_text1 img{
      width: 12%;
      margin: 0 4%;
      float: right;
  }
  .index_2_2{
    width: 5%;
    position: absolute;
    right: 10%;
    top: 44.6%;
    margin: -140px 0 0 0;
  }
  .home_img2_1{
    position: absolute;
    left: 10%;
    top:50%;
    margin-top:-22.13%;
    width:20.83%;
    z-index: 6;
  }
  .home_img2_2{
    position: absolute;
    left: 30.8%;
    top:50%;
    margin-top: -1.1%;
    width:9.21%;
    z-index: 5;
  }
  .home_img2_3{
    position: absolute;
    left: 40.4%;
    top:50%;
    margin-top: 8%;
    width:5%;
    z-index: 4;
  }
  .home_img2_4{
    position: absolute;
    left: 29.2%;
    top: 50%;
    margin-top: -5.86%;
    width:24.06%;
    z-index: 3;
  }
  .home_img2_5{
    position: absolute;
    left: 43%;
    top:50%;
    margin-top: -0.5%;
    width:13.59%;
    z-index: 2;
  }
  .cup{
    width:6.7%;
    position: absolute;
    left: 36%;
    top: 50%;
    margin-top: 9.4%;
  }
  .cup2{
    left: 47%;
  }

  .gdg{
    width:6.2%;
    position: absolute;right:20.6%;top:50%;
    margin-top: -8.3%;
  }
  .home_img5{
    width:2.9%;
    position: absolute;
    right: 31.8%;
    margin-top: -3.2%;
    top: 50%;
  }
  .home_img4{
    width: 4.11%;
    position: absolute;
    right: 29%;
    top: 50%;
    margin-top: -5.62%;
  }
  .home_img3{
    width:2.9%;
    position: absolute;right:15%;top:50%;
    margin-top: -4.5%;
  }
}
</style>