<template>
    <div class="main-container">
        <div>
            <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
                <a-form-item label="绣字类型">
                    <div>
                        <a-space>
                            <div style="display: flex">
                                <div class="touicon">前长</div>
                                <a-input size="large" v-model="qianchang" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">后长</div>
                                <a-input size="large" v-model="houchang" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">胸围</div>
                                <a-input size="large" v-model="xiongwei" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">腰围</div>
                                <a-input size="large" v-model="yaowei" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                        <div style="margin-top: 20px">
                            <a-space>
                                <div style="display: flex">
                                    <div class="touicon">下摆</div>
                                    <a-input size="large" v-model="xiabai" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">肩宽</div>
                                    <a-input size="large" v-model="jiankuan" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">左袖长</div>
                                    <a-input size="large" v-model="zuoxiuchang" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">右袖长</div>
                                    <a-input size="large" v-model="youxiuchang" suffix="cm" class="inputkuang" />
                                </div>
                            </a-space>
                        </div>
                        <div style="margin-top: 20px">
                            <a-space>
                                <div style="display: flex">
                                    <div class="touicon">袖肥</div>
                                    <a-input size="large" v-model="xiufei" suffix="cm" class="inputkuang" />
                                </div>

                                <div style="display: flex">
                                    <div class="touicon">袖扣</div>
                                    <a-input size="large" v-model="xiukou" suffix="cm" class="inputkuang" />
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
                                <a-input size="large" v-model="shengao" suffix="cm" class="inputkuang" />
                            </div>

                            <div style="display: flex">
                                <div class="touicon">体重</div>
                                <a-input size="large" v-model="tizhong" suffix="kg" class="inputkuang" />
                            </div>
                            <div style="display: flex">
                                <div class="touicon">年龄</div>
                                <a-input size="large" v-model="nianji" placeholder="请填写客户年龄" class="inputkuang" />
                            </div>
                            <div style="display: flex">
                                <div class="touicon">胸宽</div>
                                <a-input size="large" v-model="xiongkuan" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                    </div>

                    <div style="margin-top: 20px">
                        <a-space>
                            <div style="display: flex">
                                <div class="touicon">背宽</div>
                                <a-input size="large" v-model="beikuan" suffix="cm" class="inputkuang" />
                            </div>
                        </a-space>
                    </div>
                </a-form-item>

                <a-form-item label="体型数据">
                    <div class="tixingdata">
                        <div v-show="show1">
                            <div class="size">胸部</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan1, box: index != xuan1 }"
                                    v-for="(item, index) in xiongbu"
                                    :key="index"
                                    @click="xuanzhong(1, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan1, canshu: index != xuan1 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-show="show1">
                            <div class="size">背部</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan3, box: index != xuan3 }"
                                    v-for="(item, index) in beibu"
                                    :key="index"
                                    @click="xuanzhong(3, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan3, canshu: index != xuan3 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-show="show1">
                            <div class="size">肩部</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan4, box: index != xuan4 }"
                                    v-for="(item, index) in jianbu"
                                    :key="index"
                                    @click="xuanzhong(4, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan4, canshu: index != xuan4 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-show="show1">
                            <div class="size">站姿</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan5, box: index != xuan5 }"
                                    v-for="(item, index) in zhanzi"
                                    :key="index"
                                    @click="xuanzhong(5, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan5, canshu: index != xuan5 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-show="show1">
                            <div class="size">腹部</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan6, box: index != xuan6 }"
                                    v-for="(item, index) in fubu"
                                    :key="index"
                                    @click="xuanzhong(6, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan6, canshu: index != xuan6 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-show="show6">
                            <div class="size">臀部</div>
                            <div class="bigbox">
                                <div
                                    :class="{ box1: index == xuan2, box: index != xuan2 }"
                                    v-for="(item, index) in tunbu"
                                    :key="index"
                                    @click="xuanzhong(2, index)"
                                >
                                    <img :src="item.sizeImg1" alt="" class="imgs" />
                                    <div :class="{ canshu1: index == xuan2, canshu: index != xuan2 }">{{ item.size1 }}</div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 320px"></div>
                        <div style="width: 320px"></div>
                    </div>
                </a-form-item>
                <a-form-item label="备注">
                    <textarea rows="5" cols="76" v-model="beizhu"></textarea>
                </a-form-item>
                <a-form-item label="自定义图形" >
                    <el-upload
                        action="http://clound_clothing.wenkangkeji.com/mlcc/user/interface/uploadImage"
                        list-type="picture-card"
                        :on-success="handleAvatarSuccess"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                    >
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="" />
                        </el-dialog>
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </a-form-item>
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
import { querySizeinfo } from './../../api/ml';
export default {
    name: 'ltxx',
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            bottomImg: require('../../assets/cut1/icon88.png'),
            flag: false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            textarea: '',
            imageUrl: '',
            xiongbu: [],
            tunbu: [],
            beibu: [],
            jianbu: [],
            zhanzi: [],
            fubu: [],
            xuan1: '0',
            xuan2: '0',
            xuan3: '0',
            xuan4: '0',
            xuan5: '0',
            xuan6: '0',
            qianchang: '',
            houchang: '',
            xiongwei: '',
            yaowei: '',
            xiabai: '',
            jiankuan: '',
            zuoxiuchang: '',
            youxiuchang: '',
            xiufei: '',
            xiukou: '',
            shengao: '',
            tizhong: '',
            nianji: '',
            xiongkuan: '',
            beikuan: '',
            show1: true,
            show2: true,
            show3: true,
            show4: true,
            show5: true,
            show6: true,
            beizhu: '',
            xiongbuid: '',
            beibuid: '',
            jianbuid: '',
            zhanziid: '',
            fubuid: '',
            tunbuid: ''
        };
    },
    created() {},
    watch: {
        xuan2(newVal, oldVal) {
            this.$store.commit('sizeIds', this.tunbuid + '/' + this.tunbu[this.xuan2].size1);
            console.log(this.$store.getters.getsizeIds);
        },
        xuan1(newVal, oldVal) {
            console.log(this.beibu);
            this.$store.commit(
                'sizeIds',
                this.xiongbuid +
                    '/' +
                    this.xiongbu[this.xuan1].size1 +
                    ',' +
                    this.beibuid +
                    '/' +
                    this.beibu[this.xuan3].size1 +
                    ',' +
                    this.jianbuid +
                    '/' +
                    this.beibu[this.xuan4].size1 +
                    ',' +
                    this.zhanziid +
                    '/' +
                    this.zhanzi[this.xuan5].size1 +
                    ',' +
                    this.fubuid +
                    '/' +
                    this.fubu[this.xuan6].size1
            );
            console.log(this.$store.getters.getsizeIds);
        },
        xuan3(newVal, oldVal) {
            this.$store.commit(
                'sizeIds',
                this.xiongbuid +
                    '/' +
                    this.xiongbu[this.xuan1].size1 +
                    ',' +
                    this.beibuid +
                    '/' +
                    this.beibu[this.xuan3].size1 +
                    ',' +
                    this.jianbuid +
                    '/' +
                    this.beibu[this.xuan4].size1 +
                    ',' +
                    this.zhanziid +
                    '/' +
                    this.zhanzi[this.xuan5].size1 +
                    ',' +
                    this.fubuid +
                    '/' +
                    this.fubu[this.xuan6].size1
            );
            console.log(this.$store.getters.getsizeIds);
        },
        xuan4(newVal, oldVal) {
            this.$store.commit(
                'sizeIds',
                this.xiongbuid +
                    '/' +
                    this.xiongbu[this.xuan1].size1 +
                    ',' +
                    this.beibuid +
                    '/' +
                    this.beibu[this.xuan3].size1 +
                    ',' +
                    this.jianbuid +
                    '/' +
                    this.beibu[this.xuan4].size1 +
                    ',' +
                    this.zhanziid +
                    '/' +
                    this.zhanzi[this.xuan5].size1 +
                    ',' +
                    this.fubuid +
                    '/' +
                    this.fubu[this.xuan6].size1
            );
        },
        xuan5(newVal, oldVal) {
            this.$store.commit(
                'sizeIds',
                this.xiongbuid +
                    '/' +
                    this.xiongbu[this.xuan1].size1 +
                    ',' +
                    this.beibuid +
                    '/' +
                    this.beibu[this.xuan3].size1 +
                    ',' +
                    this.jianbuid +
                    '/' +
                    this.beibu[this.xuan4].size1 +
                    ',' +
                    this.zhanziid +
                    '/' +
                    this.zhanzi[this.xuan5].size1 +
                    ',' +
                    this.fubuid +
                    '/' +
                    this.fubu[this.xuan6].size1
            );
        },
        xuan6(newVal, oldVal) {
            this.$store.commit(
                'sizeIds',
                this.xiongbuid +
                    '/' +
                    this.xiongbu[this.xuan1].size1 +
                    ',' +
                    this.beibuid +
                    '/' +
                    this.beibu[this.xuan3].size1 +
                    ',' +
                    this.jianbuid +
                    '/' +
                    this.beibu[this.xuan4].size1 +
                    ',' +
                    this.zhanziid +
                    '/' +
                    this.zhanzi[this.xuan5].size1 +
                    ',' +
                    this.fubuid +
                    '/' +
                    this.fubu[this.xuan6].size1
            );
        },
        beizhu(newVal, oldVal) {
            this.$store.commit('liangtiRemark', newVal);
        },
        qianchang(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    newVal +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        houchang(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    newVal +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        xiongwei(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    newVal +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        yaowei(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    newVal +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        xiabai(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    newVal +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        jiankuan(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    newVal +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        zuoxiuchang(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    newVal +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        youxiuchang(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    newVal +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        xiufei(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    newVal +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        xiukou(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    newVal +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        shengao(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    newVal +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        tizhong(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    newVal +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        nianji(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    newVal +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        xiongkuan(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    newVal +
                    ',' +
                    '15/' +
                    this.beikuan
            );
        },
        beikuan(newVal, oldVal) {
            this.$store.commit(
                'bodySizeIds',
                '1/' +
                    this.qianchang +
                    ',' +
                    '2/' +
                    this.houchang +
                    ',' +
                    '3/' +
                    this.xiongwei +
                    ',' +
                    '4/' +
                    this.yaowei +
                    ',' +
                    '5/' +
                    this.xiabai +
                    ',' +
                    '6/' +
                    this.jiankuan +
                    ',' +
                    '7/' +
                    this.zuoxiuchang +
                    ',' +
                    '8/' +
                    this.youxiuchang +
                    ',' +
                    '9/' +
                    this.xiufei +
                    ',' +
                    '10/' +
                    this.xiukou +
                    ',' +
                    '11/' +
                    this.shengao +
                    ',' +
                    '12/' +
                    this.tizhong +
                    ',' +
                    '13/' +
                    this.nianji +
                    ',' +
                    '14/' +
                    this.xiongkuan +
                    ',' +
                    '15/' +
                    newVal
            );
            console.log(this.$store.getters.getbodySizeIds);
        }
    },
    mounted() {
        this.getlist();
        this.beizhu = this.$store.getters.getliangtiRemark;
        console.log(this.$store.getters.getbodySizeIds);
        console.log(this.$store.getters.getbodySizeIds.split(','));
        if (this.$store.getters.getbodySizeIds !== '') {
            for (let i = 0; i <= this.$store.getters.getbodySizeIds.split(',').length; i++) {
                console.log(this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1]);
                if (i == 0) {
                    this.qianchang = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 1) {
                    this.houchang = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 2) {
                    this.xiongwei = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 3) {
                    this.yaowei = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 4) {
                    this.xiabai = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 5) {
                    this.jiankuan = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 6) {
                    this.zuoxiuchang = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 7) {
                    this.youxiuchang = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 8) {
                    this.xiufei = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 9) {
                    this.xiukou = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 10) {
                    this.shengao = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 11) {
                    this.tizhong = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 12) {
                    this.nianji = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 13) {
                    this.xiongkuan = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                } else if (i == 14) {
                    this.beikuan = this.$store.getters.getbodySizeIds.split(',')[i].split('/')[1];
                }
            }
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            console.log(file);
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleAvatarSuccess(res, file) {
            console.log(res)
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$store.commit('liangtiImgs',  this.$store.getters.getliangtiImgs +","+ res.data);
            console.log(this.$store.getters.getliangtiImgs)
        },
        xuanzhong(val, index) {
            if (val == 1) {
                this.xuan1 = index;
            } else if (val == 2) {
                this.xuan2 = index;
            } else if (val == 3) {
                this.xuan3 = index;
            } else if (val == 4) {
                this.xuan4 = index;
            } else if (val == 5) {
                this.xuan5 = index;
            } else if (val == 6) {
                this.xuan6 = index;
            }
        },
        getlist() {
            console.log(this.$store.getters.getcategoryIds, '>>>>>>>>>>>>>>>>>>');
            querySizeinfo({
                template_id: '5',
                category_ids: this.$store.getters.getcategoryIds
            }).then((res) => {
                console.log(res.data, '12341234');
                for (let i = 0; i <= res.data.length; i++) {
                    if (res.data[i].sizeName == '胸部') {
                        this.xiongbu = res.data[i].smallSizeInfo;
                        this.xiongbuid = res.data[i].id;
                        this.$set(this.xiongbu);
                    } else if (res.data[i].sizeName == '背部') {
                        this.beibu = res.data[i].smallSizeInfo;
                        this.beibuid = res.data[i].id;
                        this.$set(this.beibu);
                    } else if (res.data[i].sizeName == '肩部') {
                        this.jianbu = res.data[i].smallSizeInfo;
                        this.jianbuid = res.data[i].id;
                        this.$set(this.jianbu);
                    } else if (res.data[i].sizeName == '站姿') {
                        this.zhanzi = res.data[i].smallSizeInfo;
                        this.zhanziid = res.data[i].id;
                        this.$set(this.zhanzi);
                    } else if (res.data[i].sizeName == '腹部') {
                        this.fubu = res.data[i].smallSizeInfo;
                        this.fubuid = res.data[i].id;
                        this.$set(this.fubu);
                    } else if (res.data[i].sizeName == '臀部') {
                        this.tunbu = res.data[i].smallSizeInfo;
                        this.tunbuid = res.data[i].id;
                        this.$set(this.tunbu);
                    }
                    if (this.tunbu.length == 0) {
                        this.show6 = false;
                    } else {
                        this.show1 = false;
                    }
                }
            });
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
.canshu1 {
    width: 50px;
    height: 20px;
    background: #f9d532;
    border-radius: 3px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636363;
    text-align: center;
    line-height: 20px;
    margin-top: 3px;
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
.box1 {
    width: 103px;
    height: 135px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #f9d805;
    display: flex;
    flex-direction: column;
    align-items: center;
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
