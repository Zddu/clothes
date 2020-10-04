<template>
    <div class="main-container">
        <div>
            <a-row>
                <a-col :span="4">
                    <div class="line">
                        <ul class="left-menu">
                            <li :class="{ active: xuanze == 1 }" @click="xuanze = 1">门店信息</li>
                            <li :class="{ active: xuanze == 2 }" @click="xuanze = 2">客户信息</li>
                        </ul>
                    </div>
                </a-col>
                <a-col :span="20">
                    <div class="content">
                        <StoreInformation v-show="xuanze == 1"></StoreInformation>
                        <CustomernIformation v-show="xuanze == 2"></CustomernIformation>
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
        <div @click="changeStyle" class="spot-style"><img :src="bottomImg" alt="" /></div>
    </div>
</template>

<script>
import StoreInformation from './../ChildRoute/basicInformation/StoreInformation';
import CustomernIformation from './../ChildRoute/basicInformation/CustomernIformation';
export default {
    name: 'jbxx1',
    data() {
        return {
            formLayout: 'horizontal',
            xuanze: 1,
            bottomImg: require('../../assets/cut1/icon88.png'),
            flag: false
        };
    },
    components: {
        StoreInformation,
        CustomernIformation
    },
    created() {},
    mounted() {},
    methods: {
        childClick() {
            this.$emit('childByValue', "show");
        },
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
        },

        routerlink() {
            this.$router.push({ path: '/jbxx2' });
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
        handleSelectChange(value) {
            console.log(this.shoplist[value]);
            this.shopname = this.shoplist[value].storeName;
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
    width: 420px;
    height: 86px;
    background: #e7e7e7;
    border-radius: 43px;
    right: -35px;
    bottom: -30px;
    display: flex;
    align-items: center;
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
    border-right: 4px solid #000c17;
}

.line {
    width: 175px;
    height: 607px;
    padding: 18px 0px 0px 0px;
    border-right: 1px solid #eeeeee;
}

.left-menu {
    list-style: none;
    padding: 0px 0px 0px 75px;
}

.left-menu li {
    margin-bottom: 59px;
    cursor: pointer;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303030;
}

.head-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
    width: 100vw;
    padding-bottom: 20px;
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
    min-height: 712px;
    background: #ffffff;
    padding: 45px 0 0 0;
    position: relative;
}
</style>
