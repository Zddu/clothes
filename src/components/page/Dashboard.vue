<template>
    <div class="index">
        <div class="title">
            <img src="./../../assets/img/ti1.jpg" alt class="imgs" />
            <div class="title1">
                <div class="title2">
                    <div class="size1">济文网络科技有限公司</div>
                    <div class="size2"><a-icon type="edit" />编辑</div>
                </div>
                <div class="size3">1323492UHON</div>
            </div>
            <div class="size4"><a-icon type="setting" style="margin-right: 5px" />设置</div>
            <div class="line"></div>
            <div class="size5">搜索</div>
            <div>
                <a-input-search placeholder="请输入客户手机号或姓名或产品编号" size="large" class="input" @search="onSearch" />
            </div>
        </div>
        <!-- box -->
        <div class="box">
            <div
                class="box1"
                v-for="(item, index) in scricon"
                :key="index"
                :class="{ activeshow: indexactive == index }"
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeave"
                @click="routelink(index)"
            >
                <img :src="item.scricon1" alt class="imgicon" v-show="indexactive == index" />
                <img :src="item.scricon2" alt class="imgicon" v-show="indexactive !== index" />
                <div class="titleicon">{{ item.titleicon }}</div>
            </div>
            <div class="box2"></div>
        </div>
        <!-- 抽屉 -->
        <a-drawer
            width="680"
            placement="right"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
        >
            <div>
                <a-space>
                    <div class="lian"></div>
                    <div class="zhuangse">撞色选择</div>
                </a-space>
            </div>
            <div>
                <a-space>
                    <div class="biox" @click="chuanjian(1)">
                        <img src="./../../assets/cut1/add.png" alt class="imgicon" />
                        <div class="titleicon" style="width: 180px">创建空白订单</div>
                    </div>
                    <div class="biox" @click="chuanjian(2)">
                        <img src="./../../assets/cut1/copy.png" alt class="imgicon" />
                        <div class="titleicon" style="width: 120px">复制订单</div>
                    </div>
                </a-space>
            </div>
            <div style="margin-top: 20px">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="编辑中订单" name="first">
                        <el-table :data="goodslist" border style="width: 100%">
                            <el-table-column type="index" label="序号"> </el-table-column>
                            <el-table-column prop="templateName" label="订单名称"> </el-table-column>
                            <el-table-column prop="createTime" label="创建时间"> </el-table-column>
                            <el-table-column prop="createTime" label="保存时间"> </el-table-column>
                            <el-table-column label="操作" width="180">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">继续填写</el-button>
                                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="我的模板" name="second">
                        <el-table :data="mymoldelist" border style="width: 100%">
                            <el-table-column type="index" label="序号"> </el-table-column>
                            <el-table-column prop="templateName" label="订单名称"> </el-table-column>
                            <el-table-column prop="createTime" label="创建时间"> </el-table-column>
                            <el-table-column prop="createTime" label="保存时间"> </el-table-column>
                            <el-table-column label="操作" width="180">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">使用模板</el-button>
                                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="铭朗云模版" name="third">
                        <el-table :data="langlist" border style="width: 100%">
                            <el-table-column type="index" label="序号"> </el-table-column>
                            <el-table-column prop="templateName" label="订单名称"> </el-table-column>
                            <el-table-column prop="createTime" label="创建时间"> </el-table-column>
                            <el-table-column prop="createTime" label="保存时间"> </el-table-column>
                            <el-table-column label="操作" width="180">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">使用模板</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </a-drawer>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
import { queryOrderlistBytype } from './../../api/ml';
export default {
    data() {
        return {
            active: false,
            visible: false,
            indexactive: '1000',
            activeName: 'first',
            scricon: [
                {
                    scricon1: require('./../../assets/img/icon1.png'),
                    scricon2: require('./../../assets/img/icon2.png'),
                    titleicon: '面料下单'
                },
                {
                    scricon1: require('./../../assets/img/icon3.png'),
                    scricon2: require('./../../assets/img/icon4.png'),
                    titleicon: '个订下单'
                },
                {
                    scricon1: require('./../../assets/img/icon5.png'),
                    scricon2: require('./../../assets/img/icon6.png'),
                    titleicon: '团体下单'
                },
                {
                    scricon1: require('./../../assets/img/icon7.png'),
                    scricon2: require('./../../assets/img/icon8.png'),
                    titleicon: '我的订单'
                },
                {
                    scricon1: require('./../../assets/img/icon9.png'),
                    scricon2: require('./../../assets/img/icon10.png'),
                    titleicon: '成衣下单'
                },
                {
                    scricon1: require('./../../assets/img/icon11.png'),
                    scricon2: require('./../../assets/img/icon12.png'),
                    titleicon: '产品求购'
                },
                {
                    scricon1: require('./../../assets/img/icon13.png'),
                    scricon2: require('./../../assets/img/icon14.png'),
                    titleicon: '我的返修'
                },
                {
                    scricon1: require('./../../assets/img/icon15.png'),
                    scricon2: require('./../../assets/img/icon16.png'),
                    titleicon: '账号充值'
                },
                {
                    scricon1: require('./../../assets/img/icon17.png'),
                    scricon2: require('./../../assets/img/icon18.png'),
                    titleicon: '我的客户'
                },
                {
                    scricon1: require('./../../assets/img/icon19.png'),
                    scricon2: require('./../../assets/img/icon20.png'),
                    titleicon: '我的公司'
                },
                {
                    scricon1: require('./../../assets/img/icon21.png'),
                    scricon2: require('./../../assets/img/icon22.png'),
                    titleicon: '我的报表'
                }
            ],
            titleList: [],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            goodslist: [],
            mymoldelist: [],
            langlist: []
        };
    },
    mounted() {
        this.mychanpin();
    },
    methods: {
        mychanpin() {
            queryOrderlistBytype({
                token: this.$store.getters.getToken,
                pageNo: 1,
                type: 1
            }).then((res) => {
                console.log(res);
                this.goodslist = res.data.records;
                this.$set(this.goodslist);
                console.log(this.goodslist, '123');
            });

            queryOrderlistBytype({
                token: this.$store.getters.getToken,
                pageNo: 1,
                type: 2
            }).then((res) => {
                console.log(res);
                this.mymoldelist = res.data.records;
                this.$set(this.mymoldelist);
                console.log(this.mymoldelist, '123');
            });

            queryOrderlistBytype({
                token: this.$store.getters.getToken,
                pageNo: 1,
                type: 3
            }).then((res) => {
                console.log(res);
                this.langlist = res.data.records;
                this.$set(this.langlist);
                console.log(this.langlist, '123');
            });
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        chuanjian(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/IndividualOrder'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/copy'
                });
            }
        },
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        // showDrawer() {
        //   this.visible = true;
        // },
        onClose() {
            this.visible = false;
        },
        routelink(index) {
            this.visible = true;
            this.titleList.push(this.scricon[index]);
            this.$emit('getMessage', this.titleList);
        },
        onSearch(value) {
            console.log(value);
        },
        mouseOver(index) {
            this.indexactive = index;
        },
        mouseLeave() {
            this.indexactive = '100';
        }
    }
};
</script>

<style scoped>
.biox {
    width: 300px;
    height: 300px;
    background: #f5f6f7;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
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
.titleicon {
    width: 120px;
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8b8b8b;
    line-height: 42px;
    margin-top: 47px;
}
.box1 {
    width: 300px;
    height: 300px;
    background: #ffffff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
}
.activeshow {
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.19);
}
.box2 {
    width: 300px;
}
.imgicon {
    width: 60px;
    height: 66px;
    margin-top: 92px;
}
.box {
    width: 1331px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.input {
    width: 439px;
    height: 44px;
    background: #ffffff;
    border-radius: 4px;
    margin-left: 30px;
}
.size5 {
    margin-left: 60px;
    width: 32px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #545454;
}
.line {
    width: 2px;
    height: 102px;
    background-color: #dadada;
    margin-left: 25px;
}
.size4 {
    width: 55px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #545454;
}
.size3 {
    width: 120px;
    height: 22px;
    font-size: 18px;
    font-family: DIN-Regular, DIN;
    font-weight: 400;
    color: #545454;
}
.size2 {
    width: 50px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #8c8c8c;
    margin-left: 10px;
    margin-top: 17px;
}
.title2 {
    display: flex;
}
.size1 {
    width: 300px;
    height: 42px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-H, Alibaba-PuHuiTi;
    font-weight: bold;
    color: #545454;
}
.title1 {
    height: 101px;
    width: 460px;
    /* background-color: #dfdfdf; */
    margin-left: 13px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.imgs {
    width: 101px;
    height: 101px;
    border-radius: 51px;
    margin-left: 40px;
}
.title {
    width: 1331px;
    height: 164px;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
.index {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
    width: 100%;
    height: auto;
}
</style>