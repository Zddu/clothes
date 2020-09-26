<template>
  <div class="head-step">
    <div class="head-item-step">
      <el-steps :active="2" align-center>
        <el-step space="20%" title="填写基本信息" @click.native="steptitle(1)">
          <template slot="icon">
            <img src="../../assets/cut1/icon109.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
        <el-step space="20%" title="品类版型选择" @click.native="steptitle(2)">
          <template slot="icon">
            <img src="../../assets/cut1/icon67.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
        <el-step space="20%" title="选择面料辅料" @click.native="steptitle(3)">
          <template slot="icon">
            <img src="../../assets/cut1/icon718.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
        <el-step space="20%" title="服装类别工艺" @click.native="steptitle(4)">
          <template slot="icon">
            <img src="../../assets/cut1/icon115.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
        <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(5)">
          <template slot="icon">
            <img src="../../assets/cut1/icon127.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
        <el-step space="20%" title="量体信息录入" @click.native="steptitle(6)">
          <template slot="icon">
            <img src="../../assets/cut1/icon121.png" style="height: 25px; width: 25px" />
          </template>
        </el-step>
      </el-steps>
    </div>
    <div class="main-container">
      <div>
        <a-row>
          <a-col :span="4">
            <div class="line">
              <ul class="left-menu">
                <li> 面料</li>
                <li> 西服里</li>
                <li> 马甲里</li>
                <li class="active">
                  <router-link to="order8">底领</router-link>
                </li>
                <li> 纽扣</li>
              </ul>
            </div>
          </a-col>
          <a-col :span="20">
            <div class="content">
              <div class="type-main">
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
                <a-card
                  style="width: 156px;height: 197px;background: #FFFFFF;border-radius: 3px;border: 1px solid #F9D805;margin-right: 14px;margin-bottom: 14px;">
                  <img :src="niukouImg" alt="">
                  <p class="type-font-style">LV0034</p>
                </a-card>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <transition>
        <ul v-if="flag" id="footer_choice" class="footer-choice bottom-menu">
          <li>
            产品列表
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
            重建订单
          </li>
          <li>
            保存模版
          </li>
          <li>
            特殊要求
          </li>
          <li>
            提交信息
          </li>
        </ul>
      </transition>
      <div @click="changeStyle" class="spot-style">
        <img :src="bottomImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { queryModule } from '@/api/ml'
  export default {
    name: 'order1',
    data() {
      return {
        menuData:[],
        flag:true,
        niukouImg: require('../../assets/img/dl.jpg'),
        bottomImg:require('../../assets/cut1/icon88.png')
      }
    },
    created() {
    },
    mounted() {
      this.getDhl()
    },
    methods: {
      steptitle(index) {
        if (index == 1) {
          this.$router.push({
            path: '/jbxx1'
          });
        } else if (index == 2) {
          this.$router.push({
            path: '/plbx1'
          });
        } else if (index == 3) {
          // this.$router.push({
          //     path: '/order7'
          // });
        } else if (index == 4) {
          this.$router.push({
            path: '/fzlb'
          });
        } else if (index == 5) {
          this.$router.push({
            path: '/xzxz1'
          });
        } else if (index == 6) {
          this.$router.push({
            path: '/ltxx'
          });
        }
      },
      //导航栏菜单数据
      getDhl(){
        queryModule().then(res=>{
          console.log(res);
          this.menuData = res.data
        })
      },
      changeStyle() {
        this.flag = !this.flag;
        let div = document.getElementById("footer_choice");
        console.log(div);
        div.style.width = 0 +"px"
      },
      onChange() {

      }
    }
  }
</script>

<style scoped>
  .v-enter,
  .v-leave-to {
    /* 透明度为0 */
    width: 712px;
    /* 位移(x) */
  }

  /* v-enter-active [入场动画的时间段] */
  /* v-leave-active [离场动画的时间段] */
  .v-enter-active,
  .v-leave-active {
    /* 渐变 */
    transition: all 0.75s ease;
  }

  .spot-style {
    width: 85px;
    height: 85px;
    background: #555555;
    border-radius: 45px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    right: -34px;
    bottom: -30px;
  }

  .bottom-menu {
    list-style: none;
    margin: 0;
    display:flex;
  }

  .bottom-menu li {
    float: left;
    position: relative;
    cursor: pointer;
    align-items: flex-start;
    margin-left: 30px;
  }

  .bottom-menu li {
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
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .content .type-main .type-font-style {
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

  .active {
    border-right: 4px solid #000c17;
  }

  .line {
    width: 175px;
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
    cursor: pointer;
  }

  .left-menu li {
    cursor: pointer;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303030;
  }

  .left-menu li > button span {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #585858;
    line-height: 28px;
  }

  .head-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
    padding-bottom: 20px;
    min-height: 1170px;
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
    min-height: 900px;
    background: #FFFFFF;
    padding: 45px 0 0 0;
    position: relative;
  }
</style>
