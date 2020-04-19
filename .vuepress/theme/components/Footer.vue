<template>
  <footer class="page-footer">
    <div class="wrapper">
      <div class="olinks">
        <router-link to="/about/">联系我们</router-link>
        <router-link to="/product/">产品介绍</router-link>
        <router-link to="/zs/">合作投资</router-link>
        <router-link to="/zp/">招贤纳士</router-link>
      </div>
      <div class="name">重庆江津红花村甘酒有限公司 <b>甘大哥白酒</b></div>
      <div class="summary">每一个品牌都需要自己的感情好处。这是因为，你的客户是人类，而人类的选择都是基于自己的客观感受<br>为了真正的做好一个品牌都必须定义自己的感情需求和好处</div>
      <div class="copy">Copyright &copy; 2020  All Rights Reserved.</div>
    </div>
  </footer>
</template>

<style lang="stylus">

.page-footer{
  margin-top: 32px;
  background-color: #929292;
  font-size: 13px;
  padding: 40px 0 20px;color:#fff;
  line-height: 24px;
}
.page-footer .wrapper{
  position: relative;
}
.page-footer .olinks{
  position: absolute;
  right: 0;top:0;
}
.page-footer .olinks a{
  color:#fff;margin: 0 6px;
}
.page-footer .name{
  font-size: 16px;
}
.page-footer .summary{
  margin-top: 14px;
}
.page-footer .copy{
  font-size: 12px;
  margin-top: 30px;text-align: center;
}
</style>