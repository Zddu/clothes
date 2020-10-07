<template>
    <div class="main-container">
        <div class="box">
            <div class="box1">
                <div class="button1">领口款式</div>
                <div class="paixu">
                    <div  :class="{ kuang1: index == xuan1, kuang2: index !=  xuan1}"  v-for="(item,index) in lingkoukuanshi" :key="index" @click="dianji(1,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan1, yangshi1: index !=  xuan1}">{{item.categoryName}}</div>
                    </div>
                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">平驳</div>
                    </div> -->
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>
                <div class="button1" style="margin-top: 40px">驳宽</div>
                <div class="paixu">
                    <a-select size="large" placeholder="请选择" v-model="bokuanni" style="width: 337px" @change="handleSelectChange">
                        <a-select-option :value="item.categoryName" v-for="(item, index) in bokuan" :key="index">{{
                            item.categoryName
                        }}</a-select-option>
                    </a-select>
                </div>

                <div class="button1" style="margin-top: 40px">门襟扣</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan2, kuang2: index !=  xuan2}" v-for="(item,index) in menjinkou" :key="index" @click="dianji(2,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan2, yangshi1: index !=  xuan2}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">单排一粒扣</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">外大袋</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan3, kuang2: index !=  xuan3}" v-for="(item,index) in waidadai" :key="index" @click="dianji(3,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan3, yangshi1: index !=  xuan3}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">平袋有袋盖</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">背叉</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan4, kuang2: index !=  xuan4}" v-for="(item,index) in beichai" :key="index" @click="dianji(4,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan4, yangshi1: index !=  xuan4}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">无叉</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">袖口款式</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan5, kuang2: index !=  xuan5}" v-for="(item,index) in xiukoukuanshi" :key="index" @click="dianji(5,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan5, yangshi1: index !=  xuan5}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">假叉平订</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">手巾袋</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan6, kuang2: index !=  xuan6}" v-for="(item,index) in shoujindai" :key="index" @click="dianji(6,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan6, yangshi1: index !=  xuan6}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">常规</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">驳头眼</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan7, kuang2: index !=  xuan7}" v-for="(item,index) in botouyan" :key="index" @click="dianji(7,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan7, yangshi1: index !=  xuan7}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">常规</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">外珠边</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan8, kuang2: index !=  xuan8}" v-for="(item,index) in waizhubian" :key="index" @click="dianji(8,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan8, yangshi1: index !=  xuan8}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">常规</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">珠边宽度</div>
                <div class="paixu">
                    <a-select size="large" placeholder="请选择" style="width: 337px" @change="handleSelectChange1">
                        <a-select-option :value="item.id" v-model="zhubianxiao" v-for="(item, index) in zhukuan" :key="index">{{
                            item.categoryName
                        }}</a-select-option>
                    </a-select>
                </div>

                <div class="button1" style="margin-top: 40px">里布款式</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan9, kuang2: index !=  xuan9}" v-for="(item,index) in libukuanshi" :key="index" @click="dianji(9,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan9, yangshi1: index !=  xuan9}">{{item.categoryName}}</div>
                    </div>

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>

                <div class="button1" style="margin-top: 40px">马甲款式</div>
                <div class="paixu">
                    <div :class="{ kuang1: index == xuan10, kuang2: index !=  xuan10}" v-for="(item,index) in majiakuanshi" :key="index" @click="dianji(10,index)">
                        <img :src="item.img" alt="" class="imgs" />
                        <div :class="{ yangshi: index == xuan10, yangshi1: index !=  xuan10}">{{item.categoryName}}</div>
                    </div>

                    <!-- <div class="kuang2">
                        <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                        <div class="yangshi1">常规</div>
                    </div> -->

                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                    <div style="width: 182px"></div>
                </div>
            </div>
        </div>
        <div style="height: 90px"></div>
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
import { getBokuan,getTypeAndProcess } from './../../api/ml';
export default {
    name: 'fzlb123',
    data() {
        return {
            bokuanni: "",
            zhubianxiao: "",
            flag: false,
            options: [
                {
                    value: 'zhejiang',
                    label: 'Zhejiang'
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu'
                }
            ],
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
            bottomImg: require('../../assets/cut1/icon88.png'),
            bokuan: [],
            zhukuan: [],
            lingkoukuanshi: [],
            menjinkou: [],
            waidadai: [],
            beichai: [],
            xiukoukuanshi: [],
            shoujindai: [],
            botouyan: [],
            waizhubian: [],
            libukuanshi: [],
            majiakuanshi: [],
            xuan1: "1923847892374",
            xuan2: "1923847892374",
            xuan3: "1923847892374",
            xuan4: "1923847892374",
            xuan5: "1923847892374",
            xuan6: "1923847892374",
            xuan7: "1923847892374",
            xuan8: "1923847892374",
            xuan9: "1923847892374",
            xuan10: "1923847892374",
        };
    },
    created() {},
    mounted() {
        this.getdatakuan();
        this.bokuanni = this.$store.getters.getksBokuan;
        this.zhubianxiao = this.$store.getters.getksZhubianWidth;
    },
    methods: {
        dianji(val,index) {
            if(val == 1) {
                this.xuan1 = index
            } else if(val ==2) {
                this.xuan2 = index
            } else if(val ==3) {
                this.xuan3 = index
            } else if(val ==4) {
                this.xuan4 = index
            } else if(val ==5) {
                this.xuan5 = index
            } else if(val ==6) {
                this.xuan6 = index
            } else if(val ==7) {
                this.xuan7 = index
            } else if(val ==8) {
                this.xuan8 = index
            } else if(val ==9) {
                this.xuan9 = index
            } else if(val ==10) {
                this.xuan10 = index
            }
        },
        childClick() {
            this.$emit('childByValue', 'show');
        },
        // 获取驳宽和珠边宽度
        getdatakuan() {
            getBokuan({
                token: this.$store.getters.getToken,
                mouldid: 3
            }).then((res) => {
                console.log(res);
                this.bokuan = res.data[0].categoryInfoList;
                this.zhukuan = res.data[1].categoryInfoList;
                console.log(this.zhukuan, 'zhukuan');
                this.$set(this.bokuan);
                this.$set(this.zhukuan);
            });

            getTypeAndProcess({
                token: this.$store.getters.getToken,
                mouldid: "3",
                typeids: "52,54,53,55,56,57,58"
            }).then(res => {
                console.log(res,"1")
                for(let i = 0;i<res.data.length;i++) {
                    if(res.data[i].parameter == "领口款式") {
                        this.lingkoukuanshi = res.data[i].categoryInfoList
                        this.$set(this.lingkoukuanshi)
                    } else if(res.data[i].parameter == "门襟扣") {
                        this.menjinkou = res.data[i].categoryInfoList
                        this.$set(this.menjinkou)
                    } else if(res.data[i].parameter == "外大袋") {
                        this.waidadai = res.data[i].categoryInfoList
                        this.$set(this.waidadai)
                    } else if(res.data[i].parameter == "背叉") {
                        this.beichai = res.data[i].categoryInfoList
                        this.$set(this.beichai)
                    } else if(res.data[i].parameter == "袖口款式") {
                        this.xiukoukuanshi = res.data[i].categoryInfoList
                        this.$set(this.xiukoukuanshi)
                    } else if(res.data[i].parameter == "手巾袋") {
                        this.shoujindai = res.data[i].categoryInfoList
                        this.$set(this.shoujindai)
                    } else if(res.data[i].parameter == "驳头眼") {
                        this.botouyan = res.data[i].categoryInfoList
                        this.$set(this.botouyan)
                    } else if(res.data[i].parameter == "外珠边") {
                        this.waizhubian = res.data[i].categoryInfoList
                        this.$set(this.waizhubian)
                    } else if(res.data[i].parameter == "里布款式") {
                        this.libukuanshi = res.data[i].categoryInfoList
                        this.$set(this.libukuanshi)
                    } else if(res.data[i].parameter == "马甲款式") {
                        this.majiakuanshi = res.data[i].categoryInfoList
                        this.$set(this.majiakuanshi)
                    }
                } 

            })
        },
        handleSelectChange(value) {
            console.log(value)
            this.$store.commit('ksBokuan', value);
        },
        handleSelectChange1(value) {
            console.log(value)
            this.$store.commit('ksZhubianWidth', value);
        },
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
        },
        onChange(value) {
            console.log(value);
        }
    }
};
</script>

<style scoped>
.yangshi1 {
    width: 91px;
    height: 28px;
    background: #f1f1f1;
    border-radius: 3px;
    line-height: 28px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303030;
    text-align: center;
    margin-top: 16px;
}
.yangshi {
    width: 91px;
    height: 28px;
    background: #ffec70;
    border-radius: 3px;
    line-height: 28px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303030;
    text-align: center;
    margin-top: 16px;
}
.imgs {
    width: 158px;
    height: 158px;
    margin-top: 18px;
}
.kuang2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 182px;
    height: 239px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #dfdfdf;
}
.kuang1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 182px;
    height: 239px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #f9d532;
}
.paixu {
    display: flex;
    margin-top: 20px;
    width: 1157px;
    justify-content: space-between;
    flex-flow: wrap;
}
.button1 {
    width: 144px;
    height: 48px;
    background: #ffec70;
    border-radius: 4px;
    line-height: 48px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #404040;
    text-align: center;
}
.box1 {
    width: 1157px;
}
.box {
    width: 1257px;
    display: flex;
    justify-content: center;
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
    border-right: 2px solid #000c17;
}

.line {
    width: 175px;
    height: 100%;
    padding: 18px 0px 0px 0px;
    border-right: 1px solid #eeeeee;
}

.left-menu {
    list-style: none;
    padding: 0;
    text-align: end;
}

.left-menu li {
    line-height: 59px;
    padding: 0 20px 0px 0px;
}
.bottom-menu li > button span {
    cursor: pointer;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #585858;
    line-height: 28px;
}
.head-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
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
    min-height: 800px;
    background: #ffffff;
    padding: 45px 0 0 0;
    position: relative;
}
</style>
