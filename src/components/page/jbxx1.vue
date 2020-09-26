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
                                <li  :class="{active: xuanze == 1}" @click="xuanze = 1">门店信息</li>
                                <li :class="{active: xuanze == 2}" @click="xuanze = 2">客户信息</li>
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
            <div @click="changeStyle" class="spot-style"><img :src="bottomImg" alt="" /></div>
        </div>
    </div>
</template>

<script>
import { getStoreList, queryDataBytype } from './../../api/ml';
import StoreInformation from "./../ChildRoute/basicInformation/StoreInformation"
import CustomernIformation from "./../ChildRoute/basicInformation/CustomernIformation"
export default {
    name: 'jbxx1',
    data() {
        return {
			formLayout: 'horizontal',
			xuanze: 1
        };
	},
	components: {
		StoreInformation,
		CustomernIformation
	},
    created() {},
    mounted() {
        this.getStoreCodeList();
    },
    methods: {
        
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
            console.log(this.shoplist[value]);
            this.shopname = this.shoplist[value].storeName;
        }
    }
};
</script>

<style scoped>
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
