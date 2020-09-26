<template>
    <div>
        <div class="head-type">
            <span class="type-font">里布配置</span>
            <a-checkbox defaultChecked style="margin-left: 15px" @change="onChange"> 单色 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 双色 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 三色 </a-checkbox>
        </div>
        <div class="head-type">
            <span class="type-font">里布类型</span>
            <a-checkbox defaultChecked style="margin-left: 15px" @change="onChange"> 经典 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 高级 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 时尚 </a-checkbox>
        </div>
        <div class="head-type">
            <span class="type-font">里布位置</span>
            <a-checkbox defaultChecked style="margin-left: 15px" @change="onChange"> 默认 </a-checkbox>
        </div>
        <div class="type-main">
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card
                    style="
                                        width: 156px;
                                        height: 197px;
                                        background: #ffffff;
                                        border-radius: 3px;
                                        border: 1px solid #f9d805;
                                        margin-right: 14px;
                                        margin-bottom: 14px;
                                    "
            >
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SuitPage',
        data() {
            return {
                flag: true,
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
                niukouImg: require('../../../assets/img/ml.jpg'),
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
        created() {},
        mounted() {},
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
            changeStyle() {
                this.flag = !this.flag;
                let div = document.getElementById('footer_choice');
                console.log(div);
                div.style.width = 0 + 'px';
            },
            searchCode() {
                alert(1);
            },
            onChange() {}
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
    .head-type{
        margin-bottom: 15px;
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


    .type-main {
        display: flex;
        display: -webkit-flex;
        /* justify-content: end; */
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }

   .type-main .type-font-style {
        width: 110px;
        background: #f9d532;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
    }
     .type-main img {
        width: 110px;
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

</style>
