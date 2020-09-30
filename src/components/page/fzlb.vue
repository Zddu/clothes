<template>
    
        <div class="main-container">
            <div class="box">
                <div class="box1">
                    <div class="button1">领口款式</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">平驳</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">平驳</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>
                    <div class="button1" style="margin-top: 40px">驳宽</div>
                    <div class="paixu">
                        <a-select size="large" placeholder="请选择" style="width: 337px" @change="handleSelectChange">
                            <a-select-option :value="item.id" v-for="(item,index) in bokuan" :key="index">{{item.categoryName}}</a-select-option>
                        </a-select>
                    </div>

                    <div class="button1" style="margin-top: 40px">门襟扣</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">单排一粒扣</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">单排一粒扣</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">外大袋</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">平袋有袋盖</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">平袋有袋盖</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">背叉</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">无叉</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">无叉</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">袖口款式</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">假叉平订</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">假叉平订</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">手巾袋</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">常规</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">常规</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">驳头眼</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">常规</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">常规</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">外珠边</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">常规</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">常规</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">珠边宽度</div>
                    <div class="paixu">
                         <a-select size="large" placeholder="请选择" style="width: 337px" @change="handleSelectChange">
                            <a-select-option :value="item.id" v-for="(item,index) in zhukuan" :key="index">{{item.categoryName}}</a-select-option>
                            <a-select-option value="female">female</a-select-option>
                        </a-select>
                    </div>

                    <div class="button1" style="margin-top: 40px">里布款式</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">常规</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">常规</div>
                        </div>

                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                        <div style="width: 182px"></div>
                    </div>

                    <div class="button1" style="margin-top: 40px">里布款式</div>
                    <div class="paixu">
                        <div class="kuang1">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi">常规</div>
                        </div>

                        <div class="kuang2">
                            <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                            <div class="yangshi1">常规</div>
                        </div>

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
                <!--                <div v-if="flag" id="footer_choice" class="footer-choice">-->
                <!--                </div>-->
            </transition>
            <div @click="changeStyle" class="spot-style">
                <img :src="bottomImg" alt="" />
            </div>
        </div>
</template>

<script>
import {getBokuan} from "./../../api/ml"
export default {
    name: 'fzlb123',
    data() {
        return {
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
            zhukuan: []
        };
    },
    created() {},
    mounted() {},
    methods: {
        // 获取驳宽和珠边宽度
        getdatakuan() {
              getBokuan().then(res => {
                  console.log(res)
                  this.bokuan = res.data[0].categoryInfoList
                  this.zhukuan = res.data[1].categoryInfoList
                  this.$set(this.bokuan)
                  this.$set(this.zhukuan)
              })
        },
        handleSelectChange(value) {
            console.log(this.shoplist[value]);
            this.shopname = this.shoplist[value].storeName;
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
    width: 712px;
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
