<template>
    <div>
        <el-form :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="门店编号" prop="name2">
                <a-space>
                    <a-select
                        size="large"
                        v-decorator="['gender', { rules: [{ required: true, message: '请选择门店编号' }] }]"
                        placeholder="请选择门店编号"
                        style="width: 337px"
                        v-model="mendiancode"
                        @change="handleSelectChange"
                    >
                        <a-select-option v-for="(item, index) in shoplist" :key="index" :value="index">{{
                            item.storeCode
                        }}</a-select-option>
                    </a-select>
                    <a-input size="large" placeholder="门店名称" disabled v-model="shopname" style="width: 337px" />
                </a-space>
            </el-form-item>
            <el-form-item label="面料来源" prop="name">
                <a-space>
                    <div
                        :class="{ box: index == mianxuan, box1: index != mianxuan }"
                        v-for="(item, index) in mianliao"
                        :key="index"
                        @click="xuanzea(1, index)"
                    >
                        {{ item.dataname }}
                    </div>
                </a-space>
            </el-form-item>

            <el-form-item label="业务类型" prop="name">
                <a-space>
                    <div
                        :class="{ box: index == yewuxuan, box1: index != yewuxuan }"
                        v-for="(item, index) in yewulx"
                        :key="index"
                        @click="xuanzea(2, index)"
                    >
                        {{ item.dataname }}
                    </div>
                </a-space>
            </el-form-item>

            <el-form-item label="选择包装" prop="name">
                <a-space>
                    <div
                        :class="{ box: index == baoxuan, box1: index != baoxuan }"
                        v-for="(item, index) in choosebao"
                        :key="index"
                        @click="xuanzea(3, index)"
                    >
                        {{ item.dataname }}
                    </div>
                </a-space>
            </el-form-item>

            <el-form-item label="快递方式" prop="name">
                <a-space>
                    <div
                        :class="{ box: index == kuaixuan, box1: index != kuaixuan }"
                        v-for="(item, index) in kuaidi"
                        :key="index"
                        @click="xuanzea(4, index)"
                    >
                        {{ item.courierName }}
                    </div>
                </a-space>
            </el-form-item>

            <el-form-item label="地址类型" prop="name">
                <a-space>
                    <div
                        :class="{ box: index == dizhixuan, box1: index != dizhixuan }"
                        v-for="(item, index) in address"
                        :key="index"
                        @click="xuanzea(5, index)"
                    >
                        {{ item.dizhi }}
                    </div>
                </a-space>
            </el-form-item>

            <el-form-item label="收货地址" prop="name3">
                <el-input v-model="shouhuodizhi" size="large" style="width: 482px"></el-input>
            </el-form-item>
            <el-form-item label="第三方运单号">
                <el-input size="large" v-model="danhao" style="width: 482px"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { getStoreList, queryDataBytype, queryAllCourier } from './../../../api/ml';
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
            kuaidi: [],
            address: [{ dizhi: '门店地址' }, { dizhi: '其他地址' }],
            mianxuan: '100000',
            yewuxuan: '100000',
            baoxuan: '1000000',
            kuaixuan: '1000000',
            dizhixuan: '0',
            // 收货地址是否可以修改
            addressxuan: false,
            danhao: "",
            shouhuodizhi: '',
            rules: {
                name2: [{ required: true, message: '', trigger: 'blur' }],
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                name3: [{ required: false, message: '请填写收货地址', trigger: 'blur' }]
            },
            mendiancode: ''
        };
    },
    created() {
        this.mendiancode = this.$store.getters.getstoreCode;
        console.log(this.$store.getters.getshopname);
        this.shopname = this.$store.getters.getshopname;
    },
    mounted() {
        this.getStoreCodeList();
        this.shouhuodizhi = this.$store.getters.getaddress;
        this.danhao = this.$store.getters.getthirdSn;
    },
    watch: {
        shouhuodizhi(newVal, oldVal) {
            console.log(newVal, oldVal);
            this.$store.commit('address', newVal);
        },
        danhao(newVal, oldVal) {
            this.$store.commit('thirdSn', newVal);
        }
    },
    methods: {
        xuanzea(val, index) {
            if (val == 1) {
                this.mianxuan = index;
                this.$store.commit('fabricSource', this.mianliao[index].dataname);
            } else if (val == 2) {
                this.yewuxuan = index;
                this.$store.commit('businessSource', this.yewulx[index].dataname);
            } else if (val == 3) {
                this.baoxuan = index;
                this.$store.commit('packageType', this.choosebao[index].dataname);
            } else if (val == 4) {
                this.kuaixuan = index;
                this.$store.commit('courierId', this.kuaidi[index].id);
            } else if (val == 5) {
                this.dizhixuan = index;
                this.$store.commit('addressType', this.address[index].dizhi);
                if (index == 1) {
                    this.shouhuodizhi = '';
                }
            }
        },
        getStoreCodeList() {
            console.log(this.$store.getters.getToken);
            getStoreList({
                token: this.$store.getters.getToken
            }).then((res) => {
                console.log(res, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                this.shoplist = res.data;
                this.$set(this.shoplist);
            });

            queryDataBytype({
                type: 1
            }).then((res) => {
                this.mianliao = res.data;
                this.$set(this.mianliao);
                for (let i = 0; i <= res.data.length; i++) {
                    if (this.$store.getters.getfabricSource == res.data[i].dataname) {
                        this.mianxuan = i;
                    }
                }
            });

            queryDataBytype({
                type: 2
            }).then((res) => {
                this.yewulx = res.data;
                this.$set(this.yewulx);
                for (let i = 0; i <= res.data.length; i++) {
                    if (this.$store.getters.getbusinessSource == res.data[i].dataname) {
                        this.yewuxuan = i;
                    }
                }
            });

            queryDataBytype({
                type: 3
            }).then((res) => {
                this.choosebao = res.data;
                this.$set(this.choosebao);
                for (let i = 0; i <= res.data.length; i++) {
                    if (this.$store.getters.getpackageType == res.data[i].dataname) {
                        this.baoxuan = i;
                    }
                }
            });

            queryAllCourier().then((res) => {
                console.log(res);
                this.kuaidi = res.data;
                this.$set(this.kuaidi);
                for (let i = 0; i <= res.data.length; i++) {
                    if (this.$store.getters.getcourierId == res.data[i].id) {
                        this.kuaixuan = i;
                    }
                }
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
            this.$store.commit('storeId', this.shoplist[value].companyId);
            this.$store.commit('storeCode', this.shoplist[value].storeCode);
            this.$store.commit('shopname', this.shoplist[value].storeName);
            this.shopname = this.shoplist[value].storeName;
            this.shouhuodizhi = this.shoplist[value].storeAddress;
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
