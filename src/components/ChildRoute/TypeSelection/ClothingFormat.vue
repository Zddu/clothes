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
        name: 'ClothingFormat',
        data() {
            return {
                colorxuan:'',
                //服装品类  数据
                categoryinfoData: [],
                templateData: [],
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
                bottomImg: require('../../../assets/cut1/icon88.png')
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
        mounted() {
            this.getCategoryinfo()
        },
        methods: {
            xuanzhong(item,index) {
                window.sessionStorage.removeItem("leftType5")
                window.sessionStorage.removeItem("colorxuan5")
                this.colorxuan = index
                window.sessionStorage.setItem("colorxuan4",index)
                window.sessionStorage.setItem("leftType4",item.categoryName)
                this.$store.commit('ClothingFormat', this.templateData[index].id);
                this.$store.commit('categoryIds', this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingType+","+this.$store.getters.getClothingStyle+","+item.id);
                this.$emit('child-event4',item.categoryName)
            },
            getCategoryinfo() {
                console.log(this.$store.getters.getClothingStyle);
                queryCategoryinfo({
                    template_id: '4',
                    category_ids: this.$store.getters.getClothingCategory+","+this.$store.getters.getClothingType+","+this.$store.getters.getClothingStyle
                }).then((res) => {
                    console.log(res, 'ClothingFormat');
                    this.templateData = res.data;
                    if (!window.sessionStorage.getItem("colorxuan4")){
                        this.colorxuan = 0
                        this.$store.commit('ClothingFormat', res.msg!=='暂无数据'?this.templateData[0].id:'');
                        window.sessionStorage.setItem("leftType4",this.templateData[0].categoryName)
                        this.$emit('child-event4',this.templateData[0].categoryName)
                    } else {
                        let index = Number.parseInt(window.sessionStorage.getItem('colorxuan4'))
                        this.$store.commit('ClothingFormat', this.templateData[index].id);
                        this.$emit('child-event4',this.templateData[index].categoryName)
                        this.colorxuan = window.sessionStorage.getItem("colorxuan4")
                    }
                    this.$set(this.templateData);
                });
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
