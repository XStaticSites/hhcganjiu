(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(a,t,s){},138:function(a,t,s){},140:function(a,t,s){"use strict";var i=s(137);s.n(i).a},141:function(a,t,s){"use strict";var i=s(138);s.n(i).a},142:function(a,t,s){"use strict";var i={props:["value"]},e=(s(140),s(27)),n={components:{Nav:Object(e.a)(i,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{directives:[{name:"show",rawName:"v-show",value:a.value,expression:"value"}],staticClass:"page-nav"},[s("div",{staticClass:"box-layer"},[s("div",{staticClass:"nav-list"},[s("router-link",{attrs:{to:"/"}},[a._v("首页")]),a._v(" "),s("router-link",{attrs:{to:"/about/"}},[a._v("关于我们")]),a._v(" "),s("router-link",{attrs:{to:"/carft/"}},[a._v("酿酒工艺")]),a._v(" "),s("router-link",{attrs:{to:"/product/"}},[a._v("产品介绍")])],1),a._v(" "),a._m(0),a._v(" "),s("div",{staticClass:"sns"},[s("a",{staticClass:"icon wechat",attrs:{"data-widget":"wechat",href:"javascript:;"}},[a._v(""),s("img",{attrs:{src:a.$withBase("/images/wechat.jpg")}})])]),a._v(" "),s("a",{staticClass:"close-menu icon",on:{click:function(t){return a.$emit("input",!1)}}},[a._v("")])])])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"site-info"},[this._v("\n      Copyright © 2020"),t("br"),this._v("  \n      All Rights Reserved."),t("br")])}],!1,null,null,null).exports},data:function(){return{navVisible:!1}}},r=(s(141),Object(e.a)(n,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("header",{staticClass:"page-header"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}}),a._v(" "),s("div",{staticClass:"head-right"},[s("a",{staticClass:"icon wechat",attrs:{"data-widget":"wechat",href:"javascript:;"}},[a._v(""),s("img",{attrs:{src:a.$withBase("/images/wechat.jpg")}})]),a._v(" "),s("a",{staticClass:"icon open-menu",on:{click:function(t){a.navVisible=!0}}},[a._v("")])]),a._v(" "),s("Nav",{model:{value:a.navVisible,callback:function(t){a.navVisible=t},expression:"navVisible"}})],1)}),[],!1,null,null,null));t.a=r.exports},146:function(a,t,s){"use strict";var i=s(0),e=s(28).find,n=s(57),r=s(11),o=!0,l=r("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!l},{find:function(a){return e(this,a,arguments.length>1?arguments[1]:void 0)}}),n("find")},148:function(a,t,s){},153:function(a,t,s){"use strict";var i=s(148);s.n(i).a},160:function(a,t,s){"use strict";s.r(t);s(146);var i={components:{Header:s(142).a},mounted:function(){var a=$(".page-slider"),t=$(".next-slider"),s=a.children();s.find(".timeline").timeline({paused:!0}),a.fullpage({afterLoad:function(a,t){s.eq(t-1).find(".timeline").timeline("play")},onLeave:function(i,e){s.eq(i-1).find(".timeline").timeline("reverse"),s.eq(e-1).find(".timeline").timeline("play"),e==a.children().length&&t.addClass("do-up"),1==e&&t.removeClass("do-up")}}),t.on("click",(function(){t.hasClass("do-up")?$.fn.fullpage.moveSectionUp():$.fn.fullpage.moveSectionDown()})),a.css({visibility:"visible"})},destroyed:function(){$.fn.fullpage.destroy(!0)}},e=(s(153),s(27)),n=Object(e.a)(i,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"page-index"}},[s("Header"),a._v(" "),s("div",{staticClass:"page-slider"},[s("div",{staticClass:"section active"},[s("div",{staticClass:"timeline"},[s("img",{staticClass:"home_img2 bg",attrs:{"data-method":"from","data-vars":"{alpha:0,x:100}","data-position":"+=0.45",src:a.$withBase("/images/home_img2.png"),alt:""}}),a._v(" "),s("img",{staticClass:"cup",attrs:{"data-method":"from","data-vars":"{alpha:0,x:100}","data-position":"-=0.4",src:a.$withBase("/images/cup.png"),alt:""}}),a._v(" "),s("img",{staticClass:"cup cup2",attrs:{"data-method":"from","data-vars":"{alpha:0,x:100}","data-position":"-=0.4",src:a.$withBase("/images/cup.png"),alt:""}}),a._v(" "),s("img",{staticClass:"gdg",attrs:{"data-method":"from","data-vars":"{alpha:0,scale:0.4,ease:Back.easeOut}",src:a.$withBase("/images/gdg.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img4",attrs:{"data-method":"from","data-vars":"{alpha:0,x:20}",src:a.$withBase("/images/home_img4.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img3",attrs:{"data-method":"from","data-vars":"{alpha:0,y:100}","data-position":"-=0.4",src:a.$withBase("/images/home_img3.png"),alt:""}})])]),a._v(" "),s("div",{staticClass:"section"},[s("div",{staticClass:"timeline"},[s("img",{staticClass:"index_2_2",attrs:{"data-method":"from","data-vars":"{alpha:0,x:60}","data-position":"+=0.45",src:a.$withBase("/images/index_2_2.png"),alt:""}}),a._v(" "),s("div",{staticClass:"home_text1",attrs:{"data-method":"staggerFrom","data-vars":"{alpha:0,y:-60}","data-stagger":"0.1","data-position":"-=0.2"}},[s("img",{attrs:{src:a.$withBase("/images/index_2_7.png"),alt:""}}),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/index_2_6.png"),alt:""}}),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/index_2_3.png"),alt:""}}),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/index_2_4.png"),alt:""}}),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/index_2_5.png"),alt:""}})]),a._v(" "),s("img",{staticClass:"home_img2_1",attrs:{"data-method":"from","data-vars":"{alpha:0,x:-60}","data-position":"-=0.4",src:a.$withBase("/images/home_img2.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img2_4",attrs:{"data-method":"from","data-vars":"{alpha:0,x:-60}","data-position":"-=0.4",src:a.$withBase("/images/home_img2_4.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img2_5",attrs:{"data-method":"from","data-vars":"{alpha:0,x:-60}","data-position":"-=0.4",src:a.$withBase("/images/home_img2_5.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img2_2",attrs:{"data-method":"from","data-vars":"{alpha:0,x:-60}","data-position":"-=0.4",src:a.$withBase("/images/home_img2_2.png"),alt:""}}),a._v(" "),s("img",{staticClass:"home_img2_3",attrs:{"data-method":"from","data-vars":"{alpha:0,x:-60}","data-position":"-=0.4",src:a.$withBase("/images/home_img2_3.png"),alt:""}})])])]),a._v(" "),a._m(0)],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("a",{staticClass:"icon next-slider",attrs:{href:"javascript:;"}},[t("span",{staticClass:"down"},[this._v("")]),this._v(" "),t("span",{staticClass:"up"},[this._v("")])])}],!1,null,null,null);t.default=n.exports}}]);