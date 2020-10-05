<template>
    <div class="main-container">
        <div>
            <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
                <a-form-item label="绣字类型">
                    <!-- <div style="display: flex">
                        <div class="touicon">尺寸</div>
                        <a-input size="large" placeholder="请填写尺寸" class="inputkuang" />
                    </div> -->
                    <div>
                        <a-space>
                            <div style="display: flex">
                                <div class="touicon">前长</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">后长</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">胸围</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">腰围</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                        <div style="margin-top: 20px">
                            <a-space>
                                <div style="display: flex">
                                    <div class="touicon">下摆</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">肩宽</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">左袖长</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">右袖长</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>
                            </a-space>
                        </div>
                        <div style="margin-top: 20px">
                            <a-space>
                                <div style="display: flex">
                                    <div class="touicon">袖肥</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">袖扣</div>
                                    <a-input size="large" suffix="cm" class="inputkuang" />
                                </div>
                            </a-space>
                        </div>
                    </div>
                </a-form-item>
                <a-form-item label="净体尺寸">
                    <div>
                        <a-space>
                            <div style="display: flex">
                                <div class="touicon">身高</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">体重</div>
                                <a-input size="large" suffix="kg" class="inputkuang" />
                            </div>
                            <div style="display: flex">
                                <div class="touicon">年龄</div>
                                <a-input size="large" placeholder="请填写客户年龄" class="inputkuang" />
                            </div>
                            <div style="display: flex">
                                <div class="touicon">胸宽</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                    </div>

                    <div style="margin-top: 20px">
                        <a-space>
                            <div style="display: flex">
                                <div class="touicon">背宽</div>
                                <a-input size="large" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                    </div>
                </a-form-item>

                <a-form-item label="体型数据">
                    <div class="tixingdata">
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                                <div class="box">
                                    <img src="./../../assets/img/ti1.jpg" alt="" class="imgs" />
                                    <div class="canshu">参数</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-form-item>
                <a-form-item label="备注">
                    <textarea rows="5" cols="76"></textarea>
                </a-form-item>
                    <div style="margin-left:102px">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
            </a-form>
        </div>
        <div style="height: 90px"></div>
        <!-- 底部 -->
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
export default {
    name: 'ltxx',
    data() {
        return {
            bottomImg: require('../../assets/cut1/icon88.png'),
            flag: false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            textarea: '',
            imageUrl: ''
        };
    },
    created() {},
    mounted() {},
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        childClick() {
            this.$emit('childByValue', 'show');
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
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
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
            console.log(value);
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
            });
        }
    }
};
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
<style scoped>
.tixingdata {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1000px;
}
.bigbox {
    display: flex;
    width: 320px;
    justify-content: space-between;
}
.canshu {
    width: 50px;
    height: 20px;
    background: #ebebeb;
    border-radius: 3px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636363;
    text-align: center;
    line-height: 20px;
    margin-top: 3px;
}
.imgs {
    width: 97px;
    height: 97px;
    margin-top: 7px;
}
.box {
    width: 103px;
    height: 135px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #cacaca;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.size {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #636363;
}
.inputkuang {
    width: 228px;
}
.touicon {
    height: 40px;
    width: 50px;
    background: #2d2d2d;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffec70;
    text-align: center;
    line-height: 40px;
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
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303030;
}

.active {
    border-right: 4px solid #000c17;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303030;
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
