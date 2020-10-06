<template>
    <div class="main-container">
        <div>
            <a-row>
                <a-col :span="4">
                    <div class="line">
                        <ul class="left-menu">
                            <li :class="{ active: xuanze == 1 }" @click="xuanze = 1">
                                <a-tag style="color: #ffec70" color="#303030" v-show="leftType1?true:false">
                                    {{leftType1}}
                                </a-tag>
                                服装类别
                            </li>
                            <li :class="{ active: xuanze == 2 }" @click="xuanze = 2">
                                <a-tag style="color: #ffec70" color="#303030" v-show="leftType2?true:false">
                                    {{leftType2}}
                                </a-tag>
                                服装品类
                            </li>
                            <li :class="{ active: xuanze == 3 }" @click="xuanze = 3">
                                <a-tag style="color: #ffec70" color="#303030" v-show="leftType3?true:false">
                                    {{leftType3}}
                                </a-tag>
                                服装款式
                            </li>
                            <li :class="{ active: xuanze == 4 }" @click="xuanze = 4">
                                <a-tag style="color: #ffec70" color="#303030" v-show="leftType4?true:false">
                                    {{leftType4}}
                                </a-tag>
                                服装版型
                            </li>
                            <li :class="{ active: xuanze == 5 }" @click="xuanze = 5">
                                <a-tag style="color: #ffec70" color="#303030" v-show="leftType5?true:false">
                                    {{leftType5}}
                                </a-tag>
                                工艺类型
                            </li>
                        </ul>
                    </div>
                </a-col>
                <a-col :span="20">
                    <div class="content">
                        <ClothingType @child-event="parentGetData" v-if="xuanze == 1"/>
                        <ClothingTypeOne @child-event2="parentGetData2" v-if="xuanze == 2"/>
                        <ClothingStyle @child-event3="parentGetData3" v-if="xuanze == 3"/>
                        <ClothingFormat @child-event4="parentGetData4" v-if="xuanze == 4"/>
                        <ProcessType @child-event5="parentGetData5" v-if="xuanze == 5"/>
                    </div>
                </a-col>
            </a-row>
        </div>
        <transition>
            <ul v-if="flag" id="footer_choice" class="footer-choice bottom-menu">
                <li @click="childClick">产品列表</li>
                <li>保存模版</li>
                <li>重建订单</li>
            </ul>
        </transition>
        <div @click="changeStyle" class="spot-style"><img :src="bottomImg" alt=""/></div>
    </div>
</template>

<script>
    import { queryMstemplateinfo } from '@/api/ml';
    import ClothingType from '../ChildRoute/TypeSelection/ClothingType';
    import ClothingTypeOne from '../ChildRoute/TypeSelection/ClothingTypeOne';
    import ClothingStyle from '../ChildRoute/TypeSelection/ClothingStyle';
    import ClothingFormat from '../ChildRoute/TypeSelection/ClothingFormat';
    import ProcessType from '../ChildRoute/TypeSelection/ProcessType';

    export default {
        name: 'plbx1',
        components: { ProcessType, ClothingFormat, ClothingStyle, ClothingTypeOne, ClothingType },
        data() {
            return {
                leftType1: window.sessionStorage.getItem('leftType1'),
                leftType2: window.sessionStorage.getItem('leftType2'),
                leftType3: window.sessionStorage.getItem('leftType3'),
                leftType4: window.sessionStorage.getItem('leftType4'),
                leftType5: window.sessionStorage.getItem('leftType5'),
                xuanze: 1,
                templateData: [],
                //侧边导航菜单数据
                menuData: [],
                module: {
                    module_id: '1',
                    category_id: '0'
                },
                flag: true,
                visible: false,
                bottomImg: require('../../assets/cut1/icon88.png')
            };
        },
        created() {
        },
        mounted() {
            this.getMstemplateinfo();
        },
        methods: {
            childClick() {
                this.$emit('childByValue', 'show');
            },
            //请求module菜单
            getMstemplateinfo() {
                queryMstemplateinfo(this.module).then((res) => {
                    this.menuData = res.data;
                });
            },
            parentGetData(data) {
                this.leftType1 = data;
            },
            parentGetData2(data) {
                this.leftType2 = data;
            },
            parentGetData3(data) {
                this.leftType3 = data;
            },
            parentGetData4(data) {
                console.log(data);
                this.leftType4 = data;
            },
            parentGetData5(data) {
                console.log(data);
                this.leftType5 = data;
            },
            changeStyle() {
                this.flag = !this.flag;
                let div = document.getElementById('footer_choice');
                div.style.width = 0 + 'px';
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.visible = true;
            },
            onClose() {
                this.visible = false;
            }
        }
    };
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

    .size {
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #303030;
        height: 27px;
        background: #ffec70;
        border-radius: 3px;
        text-align: center;
        line-height: 27px;
    }

    .imgs {
        width: 168px;
        height: 168px;
        margin-top: 6px;
    }

    .box {
        width: 177px;
        height: 224px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #f9d805;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        width: 420px;
        height: 86px;
        background: #e7e7e7;
        border-radius: 43px;
        right: -35px;
        bottom: -30px;
        display: flex;
        align-items: center;
    }

    .content {
        display: flex;
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
        height: 100%;
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
        padding: 0 15px 0px 0px;
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
        min-height: 800px;
        background: #ffffff;
        position: relative;
    }
</style>
