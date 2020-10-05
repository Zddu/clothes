<template>
    <div>
        <div class="head-type">
            <span class="type-font">里布配置</span>
            <a-checkbox defaultChecked style="margin-left: 15px" @change="onChange"> 单色</a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 双色</a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 三色</a-checkbox>
        </div>
        <div class="head-type">
            <span class="type-font">里布类型</span>
            <a-checkbox defaultChecked style="margin-left: 15px" @change="onChange"> 经典</a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 高级</a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 时尚</a-checkbox>
        </div>
        <div class="type-main">
            <a-card :class="styleNum===1?style1:style2" @click="choiceStyle(1)">
                <img :class="niukouImg?'':imgStyle" :src="niukouImg" alt=""/>
                <p :class="styleNum===1?fontStyle:fontStyle1">LV0034</p>
            </a-card>
            <a-card :class="styleNum===2?style1:style2" @click="choiceStyle(2)">
                <img :class="niukouImg?'':imgStyle" :src="niukouImg" alt=""/>
                <p :class="styleNum===2?fontStyle:fontStyle1">LV0034</p>
            </a-card>
            <a-card :class="styleNum===3?style1:style2" @click="choiceStyle(3)">
                <img :class="niukouImg?'':imgStyle" :src="niukouImg" alt=""/>
                <p :class="styleNum===3?fontStyle:fontStyle1">LV0034</p>
            </a-card>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VestPage',
        data() {
            return {
                fontStyle:'type-font-style',
                fontStyle1:'type-font-style1',
                styleNum:'',
                imgStyle:'imgStyle',
                style1:'card-style',
                style2:'card-style1',
                flag: true,
                niukouImg: require('../../../assets/img/dl.jpg'),
            };
        },
        created() {},
        mounted() {},
        methods: {
            choiceStyle(val){
                this.styleNum = val
            },
            changeStyle() {
                this.flag = !this.flag;
                let div = document.getElementById('footer_choice');
                console.log(div);
                div.style.width = 0 + 'px';
            },
            onChange() {}
        }
    };
</script>

<style scoped>

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
        border: 1px solid #6f6a70;
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

    .type-font-style {
        width: 110px;
        background: #f9d532;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
        margin-top: 15px;
    }
    .type-font-style1{
        width: 110px;
        background: white;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
        margin-top: 15px;
    }

    .content .type-main img {
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
