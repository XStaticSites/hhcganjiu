(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,s,a){},138:function(t,s,a){},139:function(t,s,a){},140:function(t,s,a){"use strict";var i=a(137);a.n(i).a},141:function(t,s,a){"use strict";var i=a(138);a.n(i).a},142:function(t,s,a){"use strict";var i={props:["value"]},e=(a(140),a(27)),r={components:{Nav:Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"page-nav"},[a("div",{staticClass:"box-layer"},[a("div",{staticClass:"nav-list"},[a("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),a("router-link",{attrs:{to:"/about/"}},[t._v("关于我们")]),t._v(" "),a("router-link",{attrs:{to:"/carft/"}},[t._v("酿酒工艺")]),t._v(" "),a("router-link",{attrs:{to:"/product/"}},[t._v("产品介绍")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"sns"},[a("a",{staticClass:"icon wechat",attrs:{"data-widget":"wechat",href:"javascript:;"}},[t._v(""),a("img",{attrs:{src:t.$withBase("/images/wechat.jpg")}})])]),t._v(" "),a("a",{staticClass:"close-menu icon",on:{click:function(s){return t.$emit("input",!1)}}},[t._v("")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"site-info"},[this._v("\n      Copyright © 2020"),s("br"),this._v("  \n      All Rights Reserved."),s("br")])}],!1,null,null,null).exports},data:function(){return{navVisible:!1}}},v=(a(141),Object(e.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"page-header"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}}),t._v(" "),a("div",{staticClass:"head-right"},[a("a",{staticClass:"icon wechat",attrs:{"data-widget":"wechat",href:"javascript:;"}},[t._v(""),a("img",{attrs:{src:t.$withBase("/images/wechat.jpg")}})]),t._v(" "),a("a",{staticClass:"icon open-menu",on:{click:function(s){t.navVisible=!0}}},[t._v("")])]),t._v(" "),a("Nav",{model:{value:t.navVisible,callback:function(s){t.navVisible=s},expression:"navVisible"}})],1)}),[],!1,null,null,null));s.a=v.exports},143:function(t,s,a){"use strict";var i=a(139);a.n(i).a},144:function(t,s,a){"use strict";a(143);var i=a(27),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"page-footer"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"olinks"},[a("router-link",{attrs:{to:"/about/"}},[t._v("联系我们")]),t._v(" "),a("router-link",{attrs:{to:"/product/"}},[t._v("产品介绍")]),t._v(" "),a("router-link",{attrs:{to:"/zs/"}},[t._v("合作投资")]),t._v(" "),a("router-link",{attrs:{to:"/zp/"}},[t._v("招贤纳士")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"copy"},[t._v("Copyright © 2020  All Rights Reserved.")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"name"},[this._v("重庆江津红花村甘酒有限公司 "),s("b",[this._v("甘大哥白酒")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"summary"},[this._v("每一个品牌都需要自己的感情好处。这是因为，你的客户是人类，而人类的选择都是基于自己的客观感受"),s("br"),this._v("为了真正的做好一个品牌都必须定义自己的感情需求和好处")])}],!1,null,null,null);s.a=e.exports},149:function(t,s,a){},150:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},154:function(t,s,a){var i=a(0),e=a(155);i({global:!0,forced:parseInt!=e},{parseInt:e})},155:function(t,s,a){var i=a(3),e=a(156).trim,r=a(150),v=i.parseInt,n=/^[+-]?0[Xx]/,c=8!==v(r+"08")||22!==v(r+"0x16");t.exports=c?function(t,s){var a=e(String(t));return v(a,s>>>0||(n.test(a)?16:10))}:v},156:function(t,s,a){var i=a(15),e="["+a(150)+"]",r=RegExp("^"+e+e+"*"),v=RegExp(e+e+"*$"),n=function(t){return function(s){var a=String(i(s));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(v,"")),a}};t.exports={start:n(1),end:n(2),trim:n(3)}},157:function(t,s,a){"use strict";var i=a(149);a.n(i).a},162:function(t,s,a){"use strict";a.r(s);a(154);var i=a(142),e=a(144),r=!1,v=function(t){};var n={components:{Header:i.a,Footer:e.a},mounted:function(){var t=$(".product-list"),s=$(".product-detail-list");t.on("mouseenter",".item",(function(){$(this).stop(!0).animate({marginTop:-20})})),t.on("mouseleave",".item",(function(){$(this).stop(!0).animate({marginTop:0})})),s.children().css({opacity:0,top:100});s.children().length;var a=s.offset().top-130,i=$("html,body");t.on("click",".item",(function(){$(this);i.animate({scrollTop:a},200)})),(v=function(t){s.children(".active").stop(!0).removeClass("active").css("zIndex",1).animate({opacity:0,top:100}),s.children().eq(t).stop(!0).addClass("active").css("zIndex",2).animate({opacity:1,top:0})})(0),r||(r=!0,(new Backbone.Router).route(/(.*)/,"every",(function(t){var s=parseInt(t)||0;v(s)})),Backbone.history.start())},destroyed:function(){v=function(){}}},c=(a(157),a(27)),_=Object(c.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"page-product"}},[a("Header"),t._v(" "),a("div",{staticClass:"banner"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"product-list"},[a("a",{staticClass:"item",attrs:{href:"#3"}},[a("img",{attrs:{src:t.$withBase("/images/product/pro_4.png"),alt:""}})]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"#2"}},[a("img",{attrs:{src:t.$withBase("/images/product/pro_3.png"),alt:""}})]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"#1"}},[a("img",{attrs:{src:t.$withBase("/images/product/pro_2.png"),alt:""}})]),t._v(" "),a("a",{staticClass:"item s-item",attrs:{href:"#0"}},[a("img",{attrs:{src:t.$withBase("/images/product/pro_1.png"),alt:""}})])])])]),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"product-detail-list pro-list"},[a("div",{staticClass:"item"},[a("div",{staticClass:"jingjiang"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.$withBase("/images/product/pro_img_1.jpg"),alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"jingjiang"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.$withBase("/images/product/pro_img_2.jpg"),alt:""}})]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"jingjiang"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.$withBase("/images/product/pro_img_3.jpg"),alt:""}})]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.$withBase("/images/product/pro_img_4.jpg"),alt:""}})]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])])]),t._v(" "),a("Footer")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"title"},[this._v("甘大哥小酒"),s("span",{staticClass:"tag"},[this._v("|纯粮陈酿|")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("产品名称")]),t._v(" "),a("td",[t._v("45%VOL白酒")])]),t._v(" "),a("tr",[a("td",[t._v("产品规格")]),t._v(" "),a("td",[t._v("100ml")])]),t._v(" "),a("tr",[a("td",[t._v("产品外观")]),t._v(" "),a("td",[t._v("磨砂光瓶")])]),t._v(" "),a("tr",[a("td",[t._v("产品香型")]),t._v(" "),a("td",[t._v("小曲清香（固态法）")])]),t._v(" "),a("tr",[a("td",[t._v("包装方式")]),t._v(" "),a("td",[t._v("箱装，12瓶每箱")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"buy-info"},[s("div",{staticClass:"bg"}),this._v(" "),s("div",{staticClass:"summary"},[this._v("公司传承了白沙五百年烧酒技术，运用固态法工艺古法酿造，产品属纯粹的小曲清香白酒，其特点：清、雅、醇、净。"),s("br"),s("span",{staticClass:"cl-red"},[this._v("甘大哥")]),this._v("牌45度白酒荣获2016年渝、闵、湘、鄂、桂、赣酒类质量检评金奖")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("在线购买")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"title"},[this._v("甘大哥45简装"),s("span",{staticClass:"tag"},[this._v("|纯粮陈酿|")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("产品名称")]),t._v(" "),a("td",[t._v("45%VOL白酒")])]),t._v(" "),a("tr",[a("td",[t._v("产品规格")]),t._v(" "),a("td",[t._v("500ml")])]),t._v(" "),a("tr",[a("td",[t._v("产品外观")]),t._v(" "),a("td",[t._v("光瓶纸标")])]),t._v(" "),a("tr",[a("td",[t._v("产品香型")]),t._v(" "),a("td",[t._v("小曲清香（固态法）")])]),t._v(" "),a("tr",[a("td",[t._v("包装方式")]),t._v(" "),a("td",[t._v("箱装，6瓶每箱")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"buy-info"},[s("div",{staticClass:"bg"}),this._v(" "),s("div",{staticClass:"summary"},[this._v("公司传承了白沙五百年烧酒技术，运用固态法工艺古法酿造，产品属纯粹的小曲清香白酒，其特点：清、雅、醇、净。"),s("br"),s("span",{staticClass:"cl-red"},[this._v("甘大哥")]),this._v("牌45度白酒荣获2016年渝、闵、湘、鄂、桂、赣酒类质量检评金奖")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("在线购买")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"title"},[this._v("甘大哥45经典"),s("span",{staticClass:"tag"},[this._v("|纯粮典藏|")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("产品名称")]),t._v(" "),a("td",[t._v("50%VOL白酒")])]),t._v(" "),a("tr",[a("td",[t._v("产品规格")]),t._v(" "),a("td",[t._v("500ml")])]),t._v(" "),a("tr",[a("td",[t._v("产品外观")]),t._v(" "),a("td",[t._v("盒装银标")])]),t._v(" "),a("tr",[a("td",[t._v("产品香型")]),t._v(" "),a("td",[t._v("小曲清香（固态法）")])]),t._v(" "),a("tr",[a("td",[t._v("包装方式")]),t._v(" "),a("td",[t._v("盒箱装，6盒每箱")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"buy-info"},[s("div",{staticClass:"bg"}),this._v(" "),s("div",{staticClass:"summary"},[this._v("公司传承了白沙五百年烧酒技术，运用固态法工艺古法酿造，产品属纯粹的小曲清香白酒，其特点：清、雅、醇、净。"),s("br"),s("span",{staticClass:"cl-red"},[this._v("甘大哥")]),this._v("牌45度白酒荣获2016年渝、闵、湘、鄂、桂、赣酒类质量检评金奖")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("在线购买")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"title"},[this._v("甘大哥50经典"),s("span",{staticClass:"tag"},[this._v("|纯粮典藏|")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("产品名称")]),t._v(" "),a("td",[t._v("50%VOL白酒")])]),t._v(" "),a("tr",[a("td",[t._v("产品规格")]),t._v(" "),a("td",[t._v("500ml")])]),t._v(" "),a("tr",[a("td",[t._v("产品外观")]),t._v(" "),a("td",[t._v("盒装金标")])]),t._v(" "),a("tr",[a("td",[t._v("产品香型")]),t._v(" "),a("td",[t._v("小曲清香（固态法）")])]),t._v(" "),a("tr",[a("td",[t._v("包装方式")]),t._v(" "),a("td",[t._v("盒箱装，6盒每箱")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"buy-info"},[s("div",{staticClass:"bg"}),this._v(" "),s("div",{staticClass:"summary"},[this._v("公司传承了白沙五百年烧酒技术，运用固态法工艺古法酿造，产品属纯粹的小曲清香白酒，其特点：清、雅、醇、净。"),s("br"),s("span",{staticClass:"cl-red"},[this._v("甘大哥")]),this._v("牌45度白酒荣获2016年渝、闵、湘、鄂、桂、赣酒类质量检评金奖")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("在线购买")])])}],!1,null,null,null);s.default=_.exports}}]);