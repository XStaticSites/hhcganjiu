<template>
  <div id="page-zp">
    <Header />
    <div class="banner-base"><img :src="$withBase('/images/zp_02.jpg')" alt=""></div>
    <div class="wrapper">
      <div class="page-detail">
        <div class="content fs14">
          <div class="fs22 tc" style="margin:30px 0 20px;"><span class="cl-red">招</span>贤纳士</div>
          <div class="tc"><b>业务代表/销售经理</b></div>
          <div style="width:30px;background-color:#e1444f;height:1px;margin:10px auto;"></div>
          <div class="clearfix" style="line-height:30px;margin:30px 0 60px;">
            <div class="fl" style="width: 450px;margin-left: 100px;">
              <div class="cl-red">任职要求</div>
              <ol>
                <li>具有大专以上学历，有白酒及快消品行业销售从业经验者优先</li>
                <li>身体健康（具备食品行业健康证办理条件）、无不良嗜好、善于应酬</li>
                <li>对工作有积极向上的态度，能够吃苦耐劳，有责任心</li>
                <li>熟悉重庆市地理环境、具有驾驶技能优先</li>
              </ol>
            </div>
            <div class="fl" style="width: 450px;margin-left: 100px;">
              <div class="cl-red">岗位职责</div>
              <ol>
                <li>负责所管辖区域的销售工作，对经销商的日常管理和信息反馈</li>
                <li>组织实施所管辖区域的推广促销活动</li>
                <li>所管辖区域的客户售后服务和市场维护工作</li>
                <li class="cl-red">工资组成：底薪+奖金+五险</li>
              </ol>
            </div>
          </div>
          <div class="cl-red tc">联系电话</div>
          <div class="cl-red fs20 tc">023-47339399 / 13808354045</div>
          <div class="tc"><img :src="$withBase('/images/zp_05.jpg')" alt=""></div>
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