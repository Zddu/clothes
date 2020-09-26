<template>
  <div class="head-step">
    <div class="head-item-step">
      <a-steps>
        <a-step status="finish" title="填写基本信息">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
        <a-step status="process" title="品类版型选择">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
        <a-step status="wait" title="选择面料辅料">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
        <a-step status="wait" title="服装类别工艺">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
        <a-step status="wait" title="选择绣字撞色">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
        <a-step status="wait" title="量体信息录入">
          <a-icon slot="icon" type="smile-o"/>
        </a-step>
      </a-steps>
    </div>
    <div class="main-container">
      <div>
        <a-row>
          <a-col :span="4">
            <div class="line">
              <ul class="left-menu">
                <li>
                  <a-tag style="color: #FFEC70;" color="#303030">
                    男装
                  </a-tag>
                  服装类别
                </li>
                <li class="active">
                  <a-tag style="color: #FFEC70;" color="#303030">
                    单衣
                  </a-tag>
                  服装品类</li>
                <li>
                  <a-tag style="color: #FFEC70;" color="#303030">
                    LIUH001
                  </a-tag>
                  服装款式</li>
                <li>
                  <a-tag style="color: #FFEC70;" color="#303030">
                    LIUH001
                  </a-tag>
                  服装版型</li>
                <li>
                  工艺类型</li>
              </ul>
            </div>
          </a-col>
          <a-col :span="20">
            <div class="content">
              
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="footer-choice">
        <ul class="bottom-menu">
          <li>
            <a-button type="link" block>
              产品列表
            </a-button>
            <a-badge
              :number-style="{
              color: '#F9D532FF',
              position: 'absolute',
              right: '8px',
              bottom: '0px',
            }"
              count="3"/>
          </li>
          <li>
            <a-button type="link" block>
              重建订单
            </a-button>
          </li>
          <li>
            <a-button type="link" block>
              保存模版
            </a-button>
          </li>
          <li>
            <a-button type="link" block>
              特殊要求
            </a-button>
          </li>
          <li>
            <a-button type="link" block>
              提交信息
            </a-button>
          </li>
        </ul>
        <div class="spot-style">
          <img :src="bottomImg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'order4',
    data() {
      return {
        formModel:{
          layout: 'horizontal',
          orderId:'',
        },
        formModelType:{
          layout: 'horizontal',
          orderId:undefined,
          type:['type1'],
          series:['type1'],
        },
      }
    },
    computed: {
      searchCode(){
        alert(1)
      },
      formItemLayout() {
        const { layout } = this.formModel;
        return layout === 'horizontal'
          ? {
            labelCol: { span: 2 },
            wrapperCol: { span: 12 },
          }
          : {};
      },
      formItemLayoutType() {
        const { layout } = this.formModelType;
        return layout === 'horizontal'
          ? {
            labelCol: { span: 2 },
            wrapperCol: { span: 22 },
          }
          : {};
      },
    },
    created() {
    },
    mounted() {
    },
    methods: {
      onChange() {

      }
    }
  }
</script>

<style scoped>
  .spot-style{
    width: 85px;
    height: 85px;
    background: #555555;
    border-radius: 45px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom-menu {
    list-style: none;
    margin: 0;
  }
  .bottom-menu li {
    float: left;
    position: relative;
  }
  .bottom-menu li > button span {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #585858;
    line-height: 28px;
  }

  .footer-choice {
    position: absolute;
    width: 712px;
    height: 86px;
    background: #E7E7E7;
    border-radius: 43px;
    right: -35px;
    bottom: -30px;
    display: flex;
    align-items: center;
  }

  .content .type-main {
    display: flex;
    display: -webkit-flex;
    justify-content: end;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .content .type-main .type-font-style {
    margin: 0;
    width: 110px;
    background: #F9D532;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #303030;
    text-align: center;
  }

  .content .type-main img {
    width: 110px;
  }

  .head-type {
    width: 100%;
    padding: 6px 0;
  }

  .head-type .type-font {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303030;
  }

  .active {
    border-right: 2px solid #000c17;
  }

  .line {
    width: 175px;
    height:100%;
    padding: 18px 0px 0px 0px;
    border-right: 1px solid #eeeeee;
  }

  .left-menu {
    list-style: none;
    padding: 0;
    text-align: end;
  }

  .left-menu li {
    line-height: 59px;
    padding: 0 20px 0px 0px;
  }
  .bottom-menu li > button span {
    cursor: pointer;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #585858;
    line-height: 28px;
  }
  .head-step {
    padding: 26px 123px;
  }

  .head-item-step {
    width: 1257px;
    height: 125px;
    background: #FFFFFF;
    padding: 44px 53px;
  }

  .main-container {
    margin-top: 20px;
    width: 1257px;
    min-height: 800px;
    background: #FFFFFF;
    padding: 45px 0 0 0;
    position: relative;
  }
</style>
