<template>

        <div class="main-container">
            <div>
                <a-row>
                    <a-col :span="4">
                        <div class="line">
                            <ul class="left-menu">
                                <li :class="{active: xuanze == 1}" @click="xuanze = 1">
                                    面料
                                </li>
                                <li :class="{active: xuanze == 2}" @click="xuanze = 2">
                                    西服里
                                </li>
                                <li :class="{active: xuanze == 3}" @click="xuanze = 3">
                                    马甲里
                                </li>
                                <li :class="{active: xuanze == 4}" @click="xuanze = 4">
                                    底领
                                </li>
                                <li :class="{active: xuanze == 5}" @click="xuanze = 5">
                                    纽扣
                                </li>
                            </ul>
                        </div>
                    </a-col>
                    <a-col :span="20">
                        <div class="content">
                            <FabricPage v-if="xuanze == 1"/>
                            <SuitPage v-if="xuanze == 2"/>
                            <VestPage v-if="xuanze == 3"/>
                            <BottomCollarPage v-if="xuanze == 4"/>
                            <ButtonPage v-if="xuanze == 5"/>
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
                <!--                <div v-if="flag" id="footer_choice" class="footer-choice">-->
                <!--                </div>-->
            </transition>
            <div @click="changeStyle" class="spot-style">
                <img :src="bottomImg" alt=""/>
            </div>
        </div>
</template>

<script>
    import {getButtonSelect} from '@/api/ml'
    import FabricPage from '../ChildRoute/FabricAccessories/FabricPage';
    import SuitPage from '../ChildRoute/FabricAccessories/SuitPage';
    import VestPage from '../ChildRoute/FabricAccessories/VestPage';
    import BottomCollarPage from '../ChildRoute/FabricAccessories/BottomCollarPage';
    import ButtonPage from '../ChildRoute/FabricAccessories/ButtonPage';

    export default {
        name: 'order7',
        components: { ButtonPage, BottomCollarPage, VestPage, SuitPage, FabricPage },
        data() {
            return {
                module:{
                    moudleId:'2',
                },
                moduleData:[],
                bottomImg: require('../../assets/cut1/icon88.png'),
                xuanze: 1,
                flag: false,
                flagV: true,
                formModel: {
                    layout: 'horizontal',
                    orderId: ''
                },
                formModelType: {
                    layout: 'horizontal',
                    orderId: undefined,
                    type: ['type1'],
                    series: ['type1']
                },
            };
        },
        computed: {
            formItemLayout() {
                const { layout } = this.formModel;
                return layout === 'horizontal'
                    ? {
                        labelCol: { span: 2 },
                        wrapperCol: { span: 12 }
                    }
                    : {};
            },
            formItemLayoutType() {
                const { layout } = this.formModelType;
                return layout === 'horizontal'
                    ? {
                        labelCol: { span: 2 },
                        wrapperCol: { span: 22 }
                    }
                    : {};
            }
        },
        created() {
        },
        mounted() {
            this.getButtonSelectType()
        },
        methods: {
            getButtonSelectType(){
                getButtonSelect(this.module).then(res=>{
                    this.moduleData = res.data
                })
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
            changeStyle() {
                this.flag = !this.flag;
                let div = document.getElementById('footer_choice');
                div.style.width = 0 + 'px';
            },
            searchCode() {
                alert(1);
            },

            onChange() {
            }
        }
    };
</script>

<style scoped>

    .content{
        padding: 25px 0 0 0;
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
        background: #ffffff;
        padding: 44px 53px;
    }

    .main-container {
        margin-top: 20px;
        width: 1257px;
        min-height: 900px;
        background: #ffffff;
        position: relative;
    }
</style>
