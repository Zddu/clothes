<template>
    <div class="head-step">
        <div class="head-item-step">
            <el-steps :active="active" align-center>
                <el-step space="20%" title="填写基本信息" @click.native="steptitle(0)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon109.png" style="height: 25px; width: 25px" />
                    </template>
                </el-step>
                <el-step space="20%" title="品类版型选择" @click.native="steptitle(1)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon65.png" style="height: 25px; width: 25px" v-show="active < 1" />
                        <img src="../../assets/cut1/icon68.png" style="height: 25px; width: 25px" v-show="active >= 1" />
                    </template>
                </el-step>
                <el-step space="20%" title="选择面料辅料" @click.native="steptitle(2)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon78.png" style="height: 25px; width: 25px" v-show="active < 2" />
                        <img src="../../assets/cut1/icon81.png" style="height: 25px; width: 25px" v-show="active >= 2" />
                    </template>
                </el-step>
                <el-step space="20%" title="服装类别工艺" @click.native="steptitle(3)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon115.png" style="height: 25px; width: 25px" v-show="active < 3" />
                        <img src="../../assets/cut1/icon112.png" style="height: 25px; width: 25px" v-show="active >= 3" />
                    </template>
                </el-step>
                <el-step space="20%" title="选择绣字撞色" @click.native="steptitle(4)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon127.png" style="height: 25px; width: 25px" v-show="active < 4" />
                        <img src="../../assets/cut1/icon124.png" style="height: 25px; width: 25px" v-show="active >= 4" />
                    </template>
                </el-step>
                <el-step space="20%" title="量体信息录入" @click.native="steptitle(5)">
                    <template slot="icon">
                        <img src="../../assets/cut1/icon121.png" style="height: 25px; width: 25px" v-show="active < 5" />
                        <img src="../../assets/cut1/icon118.png" style="height: 25px; width: 25px" v-show="active >= 5" />
                    </template>
                </el-step>
            </el-steps>
        </div>
        <jbxx1 v-if="active == 0" v-on:childByValue="showMsg"></jbxx1>
        <plbx1 v-if="active == 1" v-on:childByValue="showMsg"></plbx1>
        <order7 v-if="active == 2" v-on:childByValue="showMsg"></order7>
        <fzlb v-if="active == 3" v-on:childByValue="showMsg"></fzlb>
        <xzxz1 v-if="active == 4" v-on:childByValue="showMsg"></xzxz1>
        <ltxx v-if="active == 5" v-on:childByValue="showMsg"></ltxx>
        <a-drawer
            placement="right"
            width="600"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
        >
            <div>
                <a-space>
                    <div class="lian"></div>
                    <div class="zhuangse">已保存产品列表</div>
                </a-space>
            </div>
            <div v-for="(item, index) in queryList" :key="index" style="margin-top: 20px">
                <a-space>
                    <div class="kuang">
                        <img :src="item.templateImg" alt="" width="104px" height="104px" />
                    </div>
                    <div>
                        <a-space>
                            <div class="kuang2">品类</div>
                            <div class="contne1">{{ item.pingleiName }}</div>
                        </a-space>
                        <a-space>
                            <div class="kuang2" style="margin: 3px 0">面料</div>
                            <div class="contne1">{{ item.fabricName }}</div>
                        </a-space>
                        <a-space>
                            <div class="kuang2" style="margin: 3px 0">折前价格</div>
                            <div class="contne1">{{ item.zheQianPrice }}</div>
                        </a-space>
                        <a-space>
                            <div class="kuang2">折后价格</div>
                            <div class="contne1">{{ item.zheHouPrice }}</div>
                        </a-space>
                    </div>
                </a-space>
                <div>
                    <a-space>
                        <div class="edit">编辑</div>
                        <!-- <el-button size="medium" class="edit">编辑</el-button> -->
                        <div class="delete1" @click="deleteshan(index)">删除</div>
                    </a-space>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script>
import jbxx1 from './jbxx1';
import plbx1 from './plbx1';
import order7 from './order7';
import fzlb from './fzlb';
import xzxz1 from './xzxz1';
import ltxx from './ltxx';
import { queryModule, queryTemplateInfoByuserId, deleteProduct } from './../../api/ml';
export default {
    data() {
        return {
            active: 0,
            titleList: [],
            bottomImg: require('../../assets/cut1/icon88.png'),
            flag: false,
            visible: false,
            queryList: []
        };
    },
    components: {
        jbxx1,
        plbx1,
        order7,
        fzlb,
        xzxz1,
        ltxx
    },
    created() {},
    mounted() {
        this.queryModule();
        this.queerList();
    },
    methods: {
        deleteshan(index) {
            deleteProduct({
                token: this.$store.getters.getToken,
                order_sn: this.queryList[index].orderSn
            }).then((res) => {
                console.log(res);
                if (res.code == '0') {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.queerList()
                } else {
                    this.$message.error(res.msg);
                }
            });
        },
        queerList() {
            queryTemplateInfoByuserId({
                token: this.$store.getters.getToken,
                pageNo: '1'
            }).then((res) => {
                console.log(res, '123');
                this.queryList = res.data.records;
                this.$set(this.queryList);
                console.log(this.queryList);
            });
        },
        showMsg() {
            this.visible = true;
        },
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        onClose() {
            this.visible = false;
        },
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
        },
        // 模块导航栏菜单
        queryModule() {
            queryModule().then((res) => {
                console.log(res, '模块导航栏菜单');
                this.titleList = res.data;
            });
        },
        steptitle(index) {
            this.active = index;
            console.log(this.$store.getters.getToken)
        }
    }
};
</script>

<style scoped>
.delete1 {
    width: 74px;
    height: 48px;
    background: #dddddd;
    border-radius: 3px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: gray;
    text-align: center;
    line-height: 48px;
}
.edit {
    width: 74px;
    height: 48px;
    background: #303030;
    border-radius: 3px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffe56d;
    text-align: center;
    line-height: 48px;
}
.contne1 {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #4e4e4e;
    padding-left: 20px;
    width: 350px;
}
.kuang2 {
    width: 108px;
    height: 40px;
    background: #fafafa;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #4e4e4e;
    line-height: 40px;
}
.kuang {
    width: 140px;
    height: 168px;
    border-radius: 3px;
    border: 1px solid #d8d8d8;
    text-align: center;
    line-height: 168px;
}
.zhuangse {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #424242;
}
.lian {
    width: 6px;
    height: 34px;
    background: #545454;
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
</style>
