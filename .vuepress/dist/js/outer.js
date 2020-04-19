/**
 * file: module/outer.js
 * description: 
 *   通过实例化一个outer对象让一个元素获得outer事件。
 *   此事件重度依赖jquery。
 *   demo:
 *  //获得outer事件的能力
 *     //实例形式
 *     var elOuter = new outer({el:$elem});
 *     //插件形式
 *     $elem.outer();
 *     
 *  //绑定outer事件，可绑定多个，
 *     借助于jquery事件队例，实行先绑先执行，
 *     当然也可以使用事件命名空间。
 *     $elem.on('outer',function(){
 *       console.log(argument);
 *     });
 *     $elem.on('outer',function(){
 *       console.log(this);
 *     });
 *  //方法调用
 *    register:内部方法，为以后扩展需要，不建议调用（目前调了也没啥用）
 *    destroy:注销事件触发器，并不会注销事件，注销事件请使用jquery，$.fn.off,$.fn.unbind等。
 *    
 *      elOuter.destroy();
 *      $elem.outer('destroy');
 *      $elem.data('ui.outer').destroy();
 * 
 * author : [" 564493634@qq.com "]
 * date : 2014/10/24
 */
$(function(){
  var cache,check;
  cache = [],
  check = function(e){
    var target,parents;
    target = e.target;
    parents = $(e.target).parents().toArray();
    _.each(cache,function(item){
      if(item == target) return;
      if(_.indexOf(parents,item) != -1) return;

      var event = $.Event('outer',{target : target});
      $.event.trigger(event, null, item);
    });
  }
  $.event.special.outer = {
    setup: function(){
      if(cache.length == 0){
        $(document).on('click.outer',check);
      }
      cache.push(this);
    },
    teardown: function(){
      cache = _.without(cache,this);
      if (cache.length == 0){
        $(document).off('click.outer',check);
      }
    }
  }
});
