<template>
    <div class="content">
        <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label>
                <div class="lie">
                    <div class="box" v-for="(item, index) in colorInfo" :key="index">
                        <img :src="item.contrastColorImg" alt class="imgs" />
                        <div class="kuang" @click="showDrawer">
                            <a style="color: #f9d532">
                                {{ item.contrastColorName }}
                                <a-icon type="down" />
                            </a>
                        </div>
                    </div>
                    <div style="width: 202px"></div>
                    <div style="width: 202px"></div>
                    <div style="width: 202px"></div>
                    <div style="width: 202px"></div>
                    <div style="width: 202px"></div>
                </div>
            </a-form-item>
        </a-form>
        <div>
            <a-drawer
                width="564"
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

                <div class="drawerbox">
                    <div class="boxdrawer">
                        <img src="./../../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                        <div class="sizedrawer">LV0034</div>
                    </div>
                    <div class="boxdrawer">
                        <img src="./../../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                        <div class="sizedrawer">LV0034</div>
                    </div>
                    <div class="boxdrawer">
                        <img src="./../../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                        <div class="sizedrawer">LV0034</div>
                    </div>
                    <div class="boxdrawer">
                        <img src="./../../../assets/img/xiuyi.jpg" alt class="imgsdrawer" />
                        <div class="sizedrawer">LV0034</div>
                    </div>
                </div>
            </a-drawer>
        </div>
    </div>
</template>

<script>
import { AllContrastcolorInfo } from './../../../api/ml';
export default {
    name: 'xzxz2',
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            flag: false,
            bottomImg: require('../../../assets/cut1/icon88.png'),
            colorInfo: []
        };
    },
    created() {},
    mounted() {
        AllContrastcolorInfo().then((res) => {
            console.log(res);
            this.colorInfo = res.data;
            this.$set(this.colorInfo);
        });
    },
    methods: {
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
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

<style scoped>
.drawerbox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.sizedrawer {
    width: 92px;
    height: 23px;
    background: #e9e9e9;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #303030;
    margin-top: 11px;
    text-align: center;
    line-height: 23px;
}
.imgsdrawer {
    width: 143px;
    height: 143px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    margin-top: 7px;
}
.boxdrawer {
    width: 157px;
    height: 197px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
.kuang {
    width: 121px;
    height: 30px;
    background: #636363;
    border-radius: 4px;
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #f9d532;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
}
.imgs {
    width: 100px;
    height: 152px;
    margin-top: 28px;
}
.box {
    width: 202px;
    height: 240px;
    background: #ffffff;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.lie {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 840px;
}
</style>
