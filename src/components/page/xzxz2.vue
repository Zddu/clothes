<template>
    <div class="head-step">
        <div class="head-item-step">
            <el-steps :active="4" align-center>
                <el-step space="20%" title="填写基本信息" @click.native="steptitle(1)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon109.png" style="height:25px;width:25px;">
                    </template>
                </el-step>
                <el-step space="20%" title="品类版型选择" @click.native="steptitle(2)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon68.png" style="height:25px;width:25px;">
                    </template>
                </el-step>
                <el-step space="20%" title="选择面料辅料" @click.native="steptitle(3)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon80.png" style="height:25px;width:25px;">
                    </template>
                </el-step>
                <el-step space="20%" title="服装类别工艺" @click.native="steptitle(4)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon114.png" style="height:25px;width:25px;">
                    </template>
                </el-step>
                <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(5)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon126.png" style="height:25px;width:25px;">
                    </template>
                </el-step>
                <el-step space="20%" title="量体信息录入" @click.native="steptitle(6)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon121.png" style="height:25px;width:25px;">
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
                                <li @click="routerlink">绣字选项</li>
                                <li class="active">撞色选项</li>
                            </ul>
                        </div>
                    </a-col>
                    <a-col :span="20">
                        <div class="content">
                            <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
                                <a-form-item label>
                                    <div class="lie">
                                        <div class="box" v-for="(item,index) in colorInfo" :key="index">
                                            <img :src="item.contrastColorImg" alt class="imgs" />
                                            <div class="kuang" @click="showDrawer">
                                                <a style="color: #f9d532">
                                                    {{item.contrastColorName}}
                                                    <a-icon type="down" />
                                                </a>
                                            </div>
                                        </div>
                                        <div style="width: 202px"></div>
                                        <div style="width: 202px"></div>
                                        <div style="width: 202px"></div>
                                        <div style="width: 202px"></div>
                                        <div style="width: 202px"></div>
                                    </div>
                                </a-form-item>
                            </a-form>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <!-- 抽屉 -->
            <div>
                <a-drawer
                    width="564"
                    placement="right"
                    :closable="false"
                    :visible="visible"
                    :after-visible-change="afterVisibleChange"
                    @close="onClose"
                >
                    <div>
                        <a-space>
                            <div class="lian"></div>
                            <div class="zhuangse">撞色选择</div>
                        </a-space>
                    </div>

                    <div class="drawerbox">
                        <div class="boxdrawer">
                            <img src="./../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                            <div class="sizedrawer">LV0034</div>
                        </div>
                        <div class="boxdrawer">
                            <img src="./../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                            <div class="sizedrawer">LV0034</div>
                        </div>
                        <div class="boxdrawer">
                            <img src="./../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                            <div class="sizedrawer">LV0034</div>
                        </div>
                        <div class="boxdrawer">
                            <img src="./../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                            <div class="sizedrawer">LV0034</div>
                        </div>
                    </div>
                </a-drawer>
            </div>
            <!-- 底部 -->
            <transition>
                <ul v-if="flag" id="footer_choice" class="footer-choice bottom-menu">
                    <li>
                        产品列表
                        <a-badge
                            :number-style="{
                                color: '#F9D532FF',
                                position: 'absolute',
                                right: '8px',
                                bottom: '0px'
                            }"
                            count="3"
                        />
                    </li>
                    <li>重建订单</li>
                    <li>保存模版</li>
                    <li>特殊要求</li>
                    <li>提交信息</li>
                </ul>
            </transition>
            <div @click="changeStyle" class="spot-style">
                <img :src="bottomImg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import {AllContrastcolorInfo} from "./../../api/ml"
export default {
    name: 'xzxz2',
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            flag: false,
            bottomImg: require('../../assets/cut1/icon88.png'),
            colorInfo: []
        };
    },
    created() {},
    mounted() {
        AllContrastcolorInfo().then(res => {
            console.log(res)
            this.colorInfo = res.data
            this.$set(this.colorInfo)
        })
    },
    methods: {
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
        },
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
                this.$router.push({
                    path: '/order7'
                });
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
        routerlink() {
            this.$router.push({
                path: '/xzxz1'
            });
        },
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
        handleSelectChange(value) {
            console.log(value);
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
            });
        }
    }
};
</script>

<style scoped>
.drawerbox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.sizedrawer {
    width: 92px;
    height: 23px;
    background: #e9e9e9;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #303030;
    margin-top: 11px;
    text-align: center;
    line-height: 23px;
}
.imgsdrawer {
    width: 143px;
    height: 143px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    margin-top: 7px;
}
.boxdrawer {
    width: 157px;
    height: 197px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.zhuangse {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #424242;
}
.lian {
    width: 6px;
    height: 34px;
    background: #545454;
}
.kuang {
    width: 121px;
    height: 30px;
    background: #636363;
    border-radius: 4px;
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #f9d532;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
}
.imgs {
    width: 100px;
    height: 152px;
    margin-top: 28px;
}
.box {
    width: 202px;
    height: 240px;
    background: #ffffff;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.lie {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 840px;
}
.v-enter {
    width: 712px;
}

.v-leave-to {
    /* 透明度为0 */
    opacity: 0;
    /* 位移(x) */
}

/* v-enter-active [入场动画的时间段] */
/* v-leave-active [离场动画的时间段] */
.v-enter-active {
    transition: all 0.75s ease;
}

.v-leave-active {
    /* 渐变 */
    transition: all 0.75s ease;
}
.footer-choice {
    position: absolute;
    width: 712px;
    height: 86px;
    background: #e7e7e7;
    border-radius: 43px;
    right: -35px;
    bottom: -30px;
    display: flex;
    align-items: center;
}
.bottom-menu {
    list-style: none;
    margin: 0;
    display: flex;
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


.head-type {
    width: 100%;
    padding: 6px 0;
}

.head-type .type-font {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303030;
}

.active {
    border-right: 4px solid #000c17;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303030;
}

.line {
    width: 175px;
    height: 607px;
    padding: 18px 0px 0px 0px;
    border-right: 1px solid #eeeeee;
}

.left-menu {
    list-style: none;
    padding: 0px 0px 0px 75px;
}

.left-menu li {
    margin-bottom: 59px;
    cursor: pointer;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303030;
}

.head-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
}

.head-item-step {
    width: 1257px;
    height: 125px;
    background: #ffffff;
    padding: 44px 53px;
}

.main-container {
    margin-top: 20px;
    width: 1257px;
    min-height: 712px;
    background: #ffffff;
    padding: 45px 0 0 0;
    position: relative;
}
</style>
