<template>
    <div class="main-container">
        <div class="content">
            <div :class="{ box: index == colorxuan, box1: index != colorxuan }" v-for="(item, index) in templateData" :key="index" @click="xuanzhong(item,index)">
                <img :src="item.img" alt="" class="imgs" />
                <div :class="{ size: index == colorxuan, size1: index != colorxuan }">
                    <a style="color: #303030">{{ item.categoryName }}</a>
                </div>
            </div>
            <div style="width: 177px"></div>
            <div style="width: 177px"></div>
            <div style="width: 177px"></div>
            <div style="width: 177px"></div>
            <div style="width: 177px"></div>
        </div>
    </div>
</template>

<script>
import { queryCategoryinfo } from '@/api/ml';
export default {
    name: 'ClothingType',
    data() {
        return {
            template: {
                template_id: '1'
            },
            colorxuan: undefined,
            //每个目录数据
            templateData: [],
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
    created() {},
    mounted() {
        this.getCategoryinfo();
    },
    methods: {
        xuanzhong(item,index) {
            window.sessionStorage.removeItem("leftType2")
            window.sessionStorage.removeItem("colorxuan2")
            window.sessionStorage.removeItem("leftType3")
            window.sessionStorage.removeItem("colorxuan3")
            window.sessionStorage.removeItem("leftType4")
            window.sessionStorage.removeItem("colorxuan4")
            window.sessionStorage.removeItem("leftType5")
            window.sessionStorage.removeItem("colorxuan5")
            this.colorxuan = index
            window.sessionStorage.setItem("colorxuan1",index)
            window.sessionStorage.setItem("leftType1",item.categoryName)
            this.$store.commit('ClothingType', this.templateData[index].id);
            this.$store.commit('categoryIds', this.templateData[index].id);
            this.$emit('child-event',item)
        },
        getCategoryinfo() {
            queryCategoryinfo({
                template_id: '1',
                category_ids: ''
            }).then((res) => {
                console.log(res, '123123');
                this.templateData = res.data;
                if (!window.sessionStorage.getItem("colorxuan1")) {
                    this.colorxuan = 0
                    this.$store.commit('ClothingType', this.templateData[0].id);
                    //this.$emit('child-event',this.templateData[0])
                    window.sessionStorage.setItem("leftType1",this.templateData[0].categoryName)
                }else {
                    console.log(window.sessionStorage.getItem('colorxuan1'));
                    let index = Number.parseInt(window.sessionStorage.getItem('colorxuan1'))
                    this.$store.commit('ClothingType', this.templateData[index].id);
                    this.$emit('child-event',this.templateData[index])
                    this.colorxuan = window.sessionStorage.getItem("colorxuan1")
                }
                this.$set(this.templateData);
            });
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
    .v-enter-active,
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
        min-width: 63px;
        height: 27px;
        background: #ffec70;
        border-radius: 3px;
        text-align: center;
        line-height: 27px;
        margin-top: 9px;
    }

    .size1 {
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #303030;
        min-width: 63px;
        height: 27px;
        background: #EAEAEA;
        border-radius: 3px;
        text-align: center;
        line-height: 27px;
        margin-top: 9px;
    }

    .imgs {
        width: 168px;
        height: 168px;
        margin-top: 6px;
    }

    .box1 {
        width: 177px;
        height: 224px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #e3e3e3;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        justify-content: space-between;
        flex-wrap: wrap;
        width: 950px;
    }
</style>
