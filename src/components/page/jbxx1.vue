<template>
    <div class="head-step">
        <div class="head-item-step">
            <el-steps :active="0" align-center>
                <el-step space="20%" title="填写基本信息" @click.native="steptitle(1)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon109.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="品类版型选择" @click.native="steptitle(2)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon65.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="选择面料辅料" @click.native="steptitle(3)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon78.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="服装类别工艺" @click.native="steptitle(4)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon115.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(5)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon127.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="量体信息录入" @click.native="steptitle(6)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon121.png" style="height: 25px; width: 25px" />
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
                                <li class="active">门店信息</li>
                                <li @click="routerlink">客户信息</li>
                            </ul>
                        </div>
                    </a-col>
                    <a-col :span="20">
                        <div class="content">
                            <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
                                <a-form-item label="门店编号">
                                    <a-space>
                                        <a-select
                                            size="large"
                                            v-decorator="['gender', { rules: [{ required: true, message: '请选择门店编号' }] }]"
                                            placeholder="请选择门店编号"
                                            style="width: 337px"
                                            @change="handleSelectChange"
                                        >
                                            <a-select-option  v-for="(item,index) in shoplist" :key="index" :value="item.id">{{item.storeCode}}</a-select-option>
                                        </a-select>
                                        <a-input size="large" placeholder="门店名称" disabled v-model="shopname" style="width: 337px" />
                                    </a-space>
                                </a-form-item>
                                <a-form-item label="面料来源">
                                    <a-space>
                                        <div class="box">厂家面料（国内)</div>
                                        <div class="box1">客供面料（国内)</div>
                                        <a-input
                                            size="large"
                                            v-decorator="['note', { rules: [{ required: true, message: '请选择面料来源' }] }]"
                                            v-show="false"
                                            style="width: 0"
                                        />
                                    </a-space>
                                </a-form-item>

                                <a-form-item label="业务类型">
                                    <a-space>
                                        <div class="box">正常业务</div>
                                        <div class="box1">样衣业务</div>
                                        <a-input
                                            size="large"
                                            v-decorator="['note1', { rules: [{ required: true, message: '请选择业务类型' }] }]"
                                            v-show="false"
                                            style="width: 0"
                                        />
                                    </a-space>
                                </a-form-item>

                                <a-form-item label="选择包装">
                                    <a-space>
                                        <div class="box">扁箱</div>
                                        <div class="box1">立体箱(费用较高)</div>
                                        <a-input
                                            size="large"
                                            v-decorator="['note2', { rules: [{ required: true, message: '请选择包装' }] }]"
                                            v-show="false"
                                            style="width: 0"
                                        />
                                    </a-space>
                                </a-form-item>

                                <a-form-item label="快递方式">
                                    <a-space>
                                        <div class="box">顺丰</div>
                                        <div class="box1">EMS</div>
                                        <div class="box1">顺丰特惠（慢）</div>
                                        <a-input
                                            size="large"
                                            v-decorator="['note3', { rules: [{ required: true, message: '请选择快递方式' }] }]"
                                            v-show="false"
                                            style="width: 0"
                                        />
                                    </a-space>
                                </a-form-item>

                                <a-form-item label="地址类型">
                                    <a-space>
                                        <div class="box">门店地址</div>
                                        <div class="box1">其他地址</div>
                                        <a-input
                                            size="large"
                                            v-decorator="['note4', { rules: [{ required: true, message: '请选择地址类型' }] }]"
                                            v-show="false"
                                            style="width: 0"
                                        />
                                    </a-space>
                                </a-form-item>

                                <a-form-item label="收货地址">
                                    <a-input
                                        size="large"
                                        v-decorator="['note5', { rules: [{ required: true, message: '请选择收货地址' }] }]"
                                        style="width: 482px"
                                    />
                                </a-form-item>

                                <a-form-item label="第三方运单号">
                                    <a-input size="large" style="width: 482px" />
                                </a-form-item>

                                <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                  <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item> -->
                            </a-form>
                        </div>
                    </a-col>
                </a-row>
            </div>
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
            </transition>
            <div @click="changeStyle" class="spot-style">
                <img :src="bottomImg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import {getStoreList} from "./../../api/ml"
export default {
    name: 'jbxx1',
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            flag: false,
            bottomImg: require('../../assets/cut1/icon88.png'),
            shoplist:[],
            shopname: ""
        };
    },
    created() {},
    mounted() {
        this.getStoreCodeList()
    },
    methods: {
        getStoreCodeList() {
            getStoreList().then(res => {
                console.log(res)
                this.shoplist = res.data
                this.$set(this.shoplist)
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
            console.log( this.shoplist[value]);
            this.shopname = this.shoplist[value].storeName
           
        }
    }
};
</script>

<style scoped>
.box1 {
    width: 157px;
    height: 48px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    line-height: 48px;
    font-size: 16px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #828282;
    text-align: center;
}
.box {
    width: 157px;
    height: 48px;
    background: #636363;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #f9d532;
    text-align: center;
    line-height: 48px;
}
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
