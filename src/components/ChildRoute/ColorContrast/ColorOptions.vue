<template>
    <div class="content">
        <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label>
                <div class="lie">
                    <div
                        :class="{ box: index != item.categoryId, box1: index == item.categoryId }"
                        v-for="(item, index) in colorInfo"
                        :key="index"
                        @mouseover="mouseOver(index)"
                        @mouseleave="mouseLeave"
                        @click="dianji(index)"
                    >
                        <img :src="item.contrastColorImg" alt class="imgs" />
                        <div class="kuang" @click="showDrawer(index)">
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
                        <div class="zhuangse">已保存产品列表</div>
                    </a-space>
                </div>

                <div class="drawerbox">
                    <div
                        :class="{ boxdrawer: index != drawerboxxuan, boxdrawer1: index == drawerboxxuan }"
                        v-for="(item, index) in drawerList"
                        :key="index"
                        @mouseover="mouseOverDrawer(index)"
                        @mouseleave="mouseLeaveDrawer"
                        @click="drawerxuan(index)"
                    >
                        <img :src="item.colorImg" alt class="imgsdrawer" />
                        <div class="sizedrawer">{{ item.colorName }}</div>
                    </div>
                    >
                </div>
            </a-drawer>
        </div>
    </div>
</template>

<script>
import { AllContrastcolorInfo, AllembroiderColor, updateContrastcolorcolor } from './../../../api/ml';
export default {
    name: 'xzxz2',
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            flag: false,
            bottomImg: require('../../../assets/cut1/icon88.png'),
            colorInfo: [],
            drawerList: [],
            mianxuan: '1000000',
            drawerboxxuan: '100000',
            color_id: '',
            zhuangid: ''
        };
    },
    created() {},
    mounted() {
        AllContrastcolorInfo().then((res) => {
            console.log(res.data,"shuju");
            this.colorInfo = res.data
            this.$set(this.colorInfo,"qinni");
            console.log(this.colorInfo)
        });
        AllembroiderColor().then((res) => {
            console.log(res, 'AllembroiderColor');
            this.drawerList = res.data;
            this.$set(this.drawerList);
        });
    },
    methods: {
        dianji(index) {
            this.colorInfo[index].categoryId = index
            this.$set(this.colorInfo)
            this.$store.commit('zhuangseId', this.colorInfo[index].id + "," + this.$store.getters.getzhuangseId);
        },
        drawerxuan(index) {
            this.color_id = this.drawerList[index].id;
            updateContrastcolorcolor({
                id: this.zhuangid,
                color_id: this.color_id
            }).then((res) => {
                console.log(res);
                if (res.code == 0) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                }
                this.visible = false;
                AllContrastcolorInfo().then((res) => {
                    console.log(res);
                    this.colorInfo = res.data;
                    this.$set(this.colorInfo);
                });
            });
        },
        mouseLeaveDrawer() {
            this.drawerboxxuan = '3217428';
        },
        mouseOverDrawer(index) {
            this.drawerboxxuan = index;
        },
        mouseLeave() {
            this.mianxuan = '237427389';
        },
        mouseOver(index) {
            this.mianxuan = index;
        },
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
        },
        afterVisibleChange(val) {
            // console.log('visible', val);
        },
        showDrawer(index) {
            this.visible = true;
            this.zhuangid = this.colorInfo[index].id;
            console.log(this.zhuangid)
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
.boxdrawer1 {
    width: 157px;
    height: 197px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #f9d805;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
.box1 {
    width: 202px;
    height: 240px;
    background: #ffffff;
    border: 1px solid #f9d805;
    display: flex;
    flex-direction: column;
    align-items: center;
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
