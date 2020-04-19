PAGE = {};
PAGE.pageIndex = function(){
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
}

PAGE.pageCraft = function(){
}

PAGE.pageProduct = function(){
}

/*
  hover-animate
*/
$(function(){
  $("[widget='hover-animate']").timeline({paused:true});
  $(document).on("mouseenter","[widget='hover-animate']",function(){
    var $this = $(this);
    $this.timeline('play');
  });
  $(document).on("mouseleave","[widget='hover-animate']",function(){
    var $this = $(this);
    $this.timeline('reverse');
  });

});


$(function(){
  var page = document.documentElement.id.replace(/\-(\w)/,function(str,s){return s.toUpperCase()});
  PAGE[page] && PAGE[page]();
});


