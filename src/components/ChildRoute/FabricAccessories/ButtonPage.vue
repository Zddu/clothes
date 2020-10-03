<template>
    <div>
        <div class="head-type">
            <span class="type-font">纽扣类型</span>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 牛角扣 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 真贝扣 </a-checkbox>
            <a-checkbox style="margin-left: 15px" @change="onChange"> 金属扣 </a-checkbox>
        </div>
        <div class="type-main">
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
            <a-card class="card-style">
                <img :src="niukouImg" alt="" />
                <p class="type-font-style">LV0034</p>
            </a-card>
        </div>
    </div>
</template>
<script>
import {getButtonSelect} from "./../../../api/ml"
export default {
    name: 'ButtonPage',
    data() {
        return {
            flag: true,
            niukouImg: require('../../../assets/img/niukou.jpg')
        };
    },
    created() {},
    mounted() {
        this.getbutton()
    },
    methods: {
        getbutton() {
            getButtonSelect({
                moudleId: 3
            }).then(res => {
                console.log(res)
            })
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
