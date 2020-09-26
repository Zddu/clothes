<template>
    <div>
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
                        <a-select-option v-for="(item, index) in shoplist" :key="index" :value="index">{{
                            item.storeCode
                        }}</a-select-option>
                    </a-select>
                    <a-input size="large" placeholder="门店名称" disabled v-model="shopname" style="width: 337px" />
                </a-space>
            </a-form-item>
            <a-form-item label="面料来源">
                <a-space>
                    <div
                        :class="{ box: index == mianxuan, box1: index != mianxuan }"
                        v-for="(item, index) in mianliao"
                        :key="index"
                        @click="xuanzea(1, index)"
                    >
                        {{ item.dataname }}
                    </div>
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
                    <div
                        :class="{ box: index == yewuxuan, box1: index != yewuxuan }"
                        v-for="(item, index) in yewulx"
                        :key="index"
                        @click="xuanzea(2, index)"
                    >
                        {{ item.dataname }}
                    </div>
                    <!-- <div class="box1">样衣业务</div> -->
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
                    <div
                        :class="{ box: index == baoxuan, box1: index != baoxuan }"
                        v-for="(item, index) in choosebao"
                        :key="index"
                        @click="xuanzea(3, index)"
                    >
                        {{ item.dataname }}
                    </div>
                    <!-- <div class="box1">立体箱(费用较高)</div> -->
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

            <a-form-item label="第三方运单号"><a-input size="large" style="width: 482px" /></a-form-item>
        </a-form>
    </div>
</template>
<script>
import { getStoreList, queryDataBytype } from './../../../api/ml';
export default {
    name: 'jbxx1',
    data() {
        return {
            form: this.$form.createForm(this, { name: 'coordinated' }),
            flag: false,
            bottomImg: require('../../../assets/cut1/icon88.png'),
            shoplist: [],
            shopname: '',
            mianliao: [],
            yewulx: [],
            choosebao: [],
            mianxuan: '100000',
            yewuxuan: '100000',
            baoxuan: '1000000'
        };
    },
    created() {},
    mounted() {
        this.getStoreCodeList();
    },
    methods: {
        xuanzea(val, index) {
            if (val == 1) {
                this.mianxuan = index;
            } else if (val == 2) {
                this.yewuxuan = index;
            } else if (val == 3) {
                this.baoxuan = index;
            }
        },
        getStoreCodeList() {
            console.log(this.$store.getters.getToken);
            getStoreList({
                token: this.$store.getters.getToken
            }).then((res) => {
                console.log(res);
                this.shoplist = res.data;
                this.$set(this.shoplist);
            });

            queryDataBytype({
                type: 1
            }).then((res) => {
                this.mianliao = res.data;
                this.$set(this.mianliao);
            });

            queryDataBytype({
                type: 2
            }).then((res) => {
                this.yewulx = res.data;
                this.$set(this.yewulx);
            });

            queryDataBytype({
                type: 3
            }).then((res) => {
                this.choosebao = res.data;
                this.$set(this.choosebao);
            });
        },
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
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
</style>
