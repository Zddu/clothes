<template>
    <div class="head-step">
        <div class="head-item-step">
            <el-steps :active="1" align-center>
                <el-step space="20%" title="填写基本信息" @click.native="steptitle(1)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon109.png" style="height: 25px; width: 25px"/>
                    </template>
                </el-step>
                <el-step space="20%" title="品类版型选择" @click.native="steptitle(2)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon68.png" style="height: 25px; width: 25px"/>
                    </template>
                </el-step>
                <el-step space="20%" title="选择面料辅料" @click.native="steptitle(3)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon78.png" style="height: 25px; width: 25px"/>
                    </template>
                </el-step>
                <el-step space="20%" title="服装类别工艺" @click.native="steptitle(4)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon115.png" style="height: 25px; width: 25px"/>
                    </template>
                </el-step>
                <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(5)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon127.png" style="height: 25px; width: 25px"/>
                    </template>
                </el-step>
                <el-step space="20%" title="量体信息录入" @click.native="steptitle(6)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon121.png" style="height: 25px; width: 25px"/>
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
                                <li  :class="{active: xuanze == 1}" @click="xuanze = 1">
                                    <a-tag style="color: #ffec70" color="#303030"> 男装</a-tag>
                                    服装类别
                                </li>
                                <li  :class="{active: xuanze == 2}" @click="xuanze = 2">
                                    <a-tag style="color: #ffec70" color="#303030"> 单衣</a-tag>
                                    服装品类
                                </li>
                                <li  :class="{active: xuanze == 3}" @click="xuanze = 3">
                                    <a-tag style="color: #ffec70" color="#303030"> LIUH001</a-tag>
                                    服装款式
                                </li>
                                <li  :class="{active: xuanze == 4}" @click="xuanze = 4">
                                    <a-tag style="color: #ffec70" color="#303030"> LIUH001</a-tag>
                                    服装版型
                                </li>
                                <li  :class="{active: xuanze == 5}" @click="xuanze = 5">
                                    工艺类型
                                </li>
                            </ul>
                        </div>
                    </a-col>
                    <a-col :span="20">
                        <div class="content">
                            <ClothingType v-show="xuanze == 1" />
                            <ClothingTypeOne v-show="xuanze == 2" />
                            <ClothingStyle v-show="xuanze == 3" />
                            <ClothingFormat v-show="xuanze == 4" />
                            <ProcessType v-show="xuanze == 5" />
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryMstemplateinfo} from '@/api/ml'
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
                xuanze: 1,
                templateData:[],
                //侧边导航菜单数据
                menuData:[],
                module:{
                    module_id:'1',
                    category_id:'0',
                },
                flag: true,
                visible: false,
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
                bottomImg: require('../../assets/cut1/icon88.png')
            };
        },
        created() {
        },
        mounted() {
            this.getMstemplateinfo()
        },
        methods: {
            //请求module菜单
            getMstemplateinfo(){
                queryMstemplateinfo(this.module).then(res=>{
                    this.menuData = res.data;
                })
            },

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
    .v-enter-active ,
    .v-leave-active {
        /* 渐变 */
        transition: all 1s ease;
    }

    .button123 {
        margin-top: 20px;
    }

    .title234 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 168px;
        margin-left: 20px;
    }

    .ping123 {
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #4e4e4e;
        line-height: 22px;
        margin-left: 20px;
    }

    .pinglei {
        width: 108px;
        height: 40px;
        background: #fafafa;
        text-align: left;
        line-height: 40px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #4e4e4e;
    }

    .imgs1 {
        width: 104px;
        height: 104px;
    }

    .img123 {
        width: 140px;
        height: 168px;
        border-radius: 3px;
        display: flex;
        border: 1px solid #d8d8d8;
        justify-content: center;
        align-items: center;
    }

    .size12 {
        width: 74px;
        height: 48px;
        background: #d8d8d8;
        border-radius: 3px;
        line-height: 48px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #898989;
        text-align: center;
    }

    .size123 {
        width: 74px;
        height: 48px;
        background: #303030;
        border-radius: 3px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffe56d;
        line-height: 48px;
        text-align: center;
    }

    .box123 {
        width: 380px;
        margin-top: 30px;
    }

    .title123 {
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #424242;
    }

    .line123 {
        width: 6px;
        height: 32px;
        background: #545454;
    }

    .size {
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #303030;
        width: 63px;
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
        width: 712px;
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
