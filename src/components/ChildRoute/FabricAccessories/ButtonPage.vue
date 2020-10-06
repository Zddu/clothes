<template>
    <div>
        <div class="head-type">
            <span style="margin-right: 15px;">纽扣类型</span>
            <el-radio :key="item.id" v-for="(item,index) in buttonList" @change="onChange(item.id)" v-model="choiced" :label="item.id">{{item.categoryName}}</el-radio>
        </div>
        <div class="type-main">
            <a-card :key="index" v-for="(item,index) in buttonDataList" :class="styleNum===item.id?style1:style2" @click="choiceStyle(item.id)">
                <img :class="imgStyle" :src="selectImg?item.img:item.img2" alt=""/>
                <p :class="styleNum===item.id?fontStyle:fontStyle1">{{item.categoryName}}</p>
            </a-card>
        </div>
    </div>
</template>
<script>
    import { getButtonSelect,getButtons } from './../../../api/ml';

    export default {
        name: 'ButtonPage',
        data() {
            return {
                selectImg:false,
                choiced:'',
                buttonList:[],
                buttonDataList:[],

                fontStyle:'type-font-style',
                fontStyle1:'type-font-style1',
                styleNum:'',
                imgStyle:'imgStyle',
                style1:'card-style',
                style2:'card-style1',
                flag: true,
                niukouImg: require('../../../assets/img/niukou.jpg'),
            };
        },
        created() {
        },
        mounted() {
            this.getbutton();
        },
        methods: {
            getbutton() {
                getButtonSelect({
                    moudleId: '16'
                }).then(res => {
                    this.buttonList = res.data;
                    this.choiced = this.buttonList[0].id;
                    this.onChange(this.choiced);
                });
            },
            choiceStyle(val){
                this.selectImg = true
                this.styleNum = val
            },
            onChange(val) {
                console.log("select:"+val);
                getButtons(
                    {moudleId:'16',buttonTypeId:val}
                    ).then(res=>{
                    this.buttonDataList = res.data
                    console.log(this.buttonDataList);
                })
            }
        }
    };
</script>

<style scoped>
    .imgStyle {
        height: 128px;
        margin-bottom: 10px;
    }

    .card-style {
        width: 156px;
        height: 197px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #f9d805;
        margin-right: 14px;
        margin-bottom: 14px;
    }
    .card-style1 {
        width: 156px;
        height: 197px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #e4e1e4;
        margin-right: 14px;
        margin-bottom: 14px;
    }
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
        min-width: 110px;
        background: #f9d532;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
    }
    .type-font-style1{
        min-width: 110px;
        background: #dedede;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
    }
    .type-main img {
        width: 110px;
        min-height: 128px;
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
</style>
