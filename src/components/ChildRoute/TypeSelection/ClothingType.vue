<template>
    <div class="main-container">
        <div class="content">
            <div class="box">
                <img src="./../../../assets/img/ti1.jpg" alt="" class="imgs"/>
                <div class="size" @click="showDrawer">
                    <a style="color: #303030">男装</a>
                </div>
            </div>
            <div class="box">
                <img src="./../../../assets/img/ti1.jpg" alt="" class="imgs"/>
                <div class="size"><a style="color: #303030">男装</a></div>
            </div>
        </div>
        <a-drawer
                :width="439"
                placement="right"
                :closable="false"
                :visible="visible"
                :after-visible-change="afterVisibleChange"
                @close="onClose"
        >
            <div>
                <div>
                    <a-space>
                        <div class="line123"></div>
                        <div class="title123">已保存产品列表</div>
                    </a-space>
                </div>

                <div class="box123">
                    <div>
                        <a-space>
                            <div class="img123">
                                <img src="./../../../assets/img/ti1.jpg" alt="" class="imgs1"/>
                            </div>
                            <div class="title234">
                                <div>
                                    <a-space>
                                        <div class="pinglei">
                                            <p style="margin-left: 22px">品类</p>
                                        </div>
                                        <div class="ping123">上衣</div>
                                    </a-space>
                                </div>
                                <div>
                                    <a-space>
                                        <div class="pinglei">
                                            <p style="margin-left: 22px">面料编号</p>
                                        </div>
                                        <div class="ping123">AASQ234</div>
                                    </a-space>
                                </div>
                                <div>
                                    <a-space>
                                        <div class="pinglei">
                                            <p style="margin-left: 22px">折前价格</p>
                                        </div>
                                        <div class="ping123">5000元</div>
                                    </a-space>
                                </div>
                                <div>
                                    <a-space>
                                        <div class="pinglei">
                                            <p style="margin-left: 22px">折后价格</p>
                                        </div>
                                        <div class="ping123">4000元</div>
                                    </a-space>
                                </div>
                            </div>
                        </a-space>
                    </div>
                    <div class="button123">
                        <a-space>
                            <div class="size123">编辑</div>
                            <div class="size12">编辑</div>
                        </a-space>
                    </div>
                </div>
            </div>
        </a-drawer>
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
    import {queryCategoryinfo} from '@/api/ml'
    export default {
        name: 'ClothingType',
        data() {
            return {
                template:{
                    template_id:"3"
                },
                //每个目录数据
                templateData:[],
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
                bottomImg: require('../../../assets/cut1/icon88.png')
            };
        },
        created() {
        },
        mounted() {
            this.getCategoryinfo()
        },
        methods: {
            getCategoryinfo(){
                queryCategoryinfo(this.template).then(res=>{
                    console.log(res);
                    this.templateData = res.data
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


</style>
