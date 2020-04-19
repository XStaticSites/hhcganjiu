var ie = navigator.userAgent.match(/MSIE.*?(\d+)/);
ie = ie ? ie[1] : 10;
(function(window){
  var Timeline = function(opt){
    var that = this;
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    if(ie<9){
      return {
        play:function(){
          that.$el.addClass('play');
        },
        reverse:function(){
          that.$el.removeClass('play');
        }
      }
    }
    var timeLine = new TimelineLite({paused:this.options.paused});
    this.createTimeLine(timeLine,this.$el);
    return timeLine;
  }

  $.extend(Timeline.prototype,{
    createTimeLine: function(timeLine,$el){
      var that = this;
      var $el = $($el);
      var $animates = $el.find('[data-method]');

      $animates.each(function(el,i){
        that.addTween(timeLine,this);
      });
    },
    addTween: function(timeLine,$el){
      var that = this;
      var $el = $($el);
      var params = $.extend({},this.constructor.params,$el.data());
      params.vars = eval('('+params.vars+')');
      var tween;
      switch(params.method){
        case "staggerFromTo":{
          tween = TweenMax[params.method]($el.children(),params.duration,params.vars,params.tovars,params.stagger);
          break;
        }
        case "staggerFrom":
        case "staggerTo":{
          tween = TweenMax[params.method]($el.children(),params.duration,params.vars,params.stagger);
          break; 
        }
        default:{
          tween = TweenMax[params.method]($el,params.duration,params.vars);
        }
      }
      timeLine.add(tween,params.position);
    }
  });
  $.extend(Timeline,{
    options : {
      paused:false
    },
    params: {
      method:"from",
      duration:0.5,
      vars:'{}',
      position:'+=0',
      stagger:0
    }
  });

  $.fn.extend({
    timeline : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('timeline');
        if(!data && $.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new Timeline(opt);
          $this.data('timeline',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return Timeline
})(window);
