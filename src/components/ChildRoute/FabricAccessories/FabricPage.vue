<template>
    <div>
        <div class="content">
            <el-form ref="form" label-width="90px">
                <el-form-item label="面料号查找">
                    <el-input suffix-icon="el-icon-search"
                              @keyup.enter.native="searchCode"
                              placeholder="请输入面料号"
                              style="width: 40%" v-model="mlCode"></el-input>
                </el-form-item>
            </el-form>

            <div class="type-main">
                <a-card v-for="(item,index) in singleFabricList" :class="{ cardStyle: index.toString() ===styleNum, cardStyle1: index.toString() !== styleNum }" :key="index"
                        @click="choiceStyle(index+'')">
                    <img :class="item.fabricImg?'':imgStyle" :src="item.fabricImg" alt=""/>
                    <p :class="{ 'type-font-style': index.toString() === styleNum, 'type-font-style1': index.toString() !== styleNum }">{{item.fabricCode}}</p>
                    <p style="font-size: 13px;text-align: center">当前库存：{{item.inventory}}</p>
                </a-card>
            </div>
        </div>

        <el-dialog
                title="面料购买"
                :visible.sync="dialogVisible"
                width="35%"
        >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="面料编号" prop="fabricCode">
                    <el-input disabled v-model="ruleForm.fabricCode"></el-input>
                </el-form-item>
                <el-form-item label="当前库存" prop="inventory">
                    <el-input disabled v-model="ruleForm.inventory"></el-input>
                </el-form-item>
                <el-form-item label="购买米数" prop="fabricUnit">
                    <el-input placeholder="请填写购买米数" v-model="fabricUnit1"></el-input>
                </el-form-item>
            </el-form>
            <div style="width: 100%;margin-left: 100px;font-size: 13px;margin-bottom: 15px;">
                <span>详情参照表</span> <span style="color: #e6a23c;cursor: pointer">《单耗对照表》</span>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button style="color:#000;background: #fff" @click="dialogVisible = false">取 消</el-button>
                <el-button style="color:#fff;background: #68666b" type="primary" @click="handleSave">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { querySingleFabricList } from '@/api/ml';

    export default {
        name: 'FabricPage',
        data() {
            return {
                ruleForm: {},
                fabricUnit1:'',
                dialogVisible: false,
                styleNum: '',
                //面料号
                mlCode: '',
                //面料数据
                singleFabricList: [],
                xuanze: 1,
                flag: false,
                flagV: true,
                niukouImg: require('../../../assets/img/ml.jpg'),
                token: window.sessionStorage.getItem('Token'),
                rules: {
                    fabricUnit: [
                        { required: true, message: '请填写购买米数', trigger: 'blur' }
                    ]
                }
            };
        },
        created() {
            this.styleNum = window.sessionStorage.getItem("styleNum1")?window.sessionStorage.getItem("styleNum1"):''
            this.fabricUnit1 = window.sessionStorage.getItem("mllong")?window.sessionStorage.getItem("mllong"):''
        },
        mounted() {
            this.getSingleFabricList();
        },
        methods: {
            handleSave() {
                window.sessionStorage.setItem('mlId', this.ruleForm.id);
                window.sessionStorage.setItem('mllong', this.fabricUnit1);
                this.$store.commit("fabricIds",this.ruleForm.id+"/"+this.fabricUnit1);
                this.dialogVisible = false;
                window.sessionStorage.setItem("styleNum1",this.styleNum)
            },
            choiceStyle(val) {
                console.log(val);
                this.styleNum = val;
                this.dialogVisible = true;
                this.ruleForm = this.singleFabricList[val];
            },

            getSingleFabricList() {
                console.log(window.sessionStorage.getItem('styleNum1'));
                querySingleFabricList(
                    { token: this.token, typeId: 0, fabeicCode: this.mlCode }
                ).then(res => {
                    console.log(res);
                    this.singleFabricList = res.data;
                });
            },
            searchCode() {
                this.getSingleFabricList();
            },

            onChange() {
            }
        }
    };
</script>

<style scoped>

    .cardStyle {
        width: 156px;
        height: 197px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #f9d805;
        margin-right: 14px;
        margin-bottom: 14px;
    }

    .cardStyle1 {
        width: 156px;
        height: 197px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #b9b4ba;
        margin-right: 14px;
        margin-bottom: 14px;
    }

    .imgStyle {
        height: 124px;
        margin-bottom: 10px;
    }

    .haha {
        width: 156px;
        height: 197px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #f9d805;
        margin-right: 14px;
        margin-bottom: 14px;
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

    .content .type-main {
        display: flex;
        display: -webkit-flex;
        /* justify-content: end; */
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }

    .type-font-style {
        background: #f9d532;
        position: absolute;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
        top: 0;
        right: 0;
    }

    .type-font-style1 {
        background: #ded9d9;
        position: absolute;
        border-radius: 3px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #303030;
        text-align: center;
        top: 0;
        right: 0;
    }

    .content .type-main img {
        width: 110px;
        height: 140px;
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
