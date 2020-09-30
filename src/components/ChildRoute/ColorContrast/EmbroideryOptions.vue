<template>
    <div class="content">
        <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label="绣字类型">
                <a-select
                    size="large"
                    v-decorator="['gender', { rules: [{ required: true, message: '请选择门店编号' }] }]"
                    placeholder="请选择门店编号"
                    style="width: 337px"
                    @change="handleSelectChange"
                >
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="绣字位置">
                <a-select
                    size="large"
                    v-decorator="['gender', { rules: [{ required: true, message: '请选择门店编号' }] }]"
                    placeholder="请选择门店编号"
                    style="width: 337px"
                    @change="handleSelectChange"
                >
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="绣字第一行">
                <a-input size="large" style="width: 337px" />
            </a-form-item>

            <a-form-item label="绣字第二行">
                <a-input size="large" style="width: 337px" />
            </a-form-item>

            <a-form-item label="字体选择">
                <div class="lie">
                    <div class="box" v-for="(item, index) in fontsizelist" :key="index">
                        <img :src="item.embroideredImage" alt class="imgs" />
                        <div class="kuang">{{ item.embroideredName }}</div>
                    </div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                </div>
            </a-form-item>

            <a-form-item label="颜色选择">
                <div class="lie">
                    <div class="box1" v-for="(item, index) in colorlist" :key="index">
                        <img :src="item.colorImg" alt class="imgs" />
                        <div class="kuang1">{{ item.colorName }}</div>
                    </div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                </div>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { AllembroiderFont, AllembroiderColor } from './../../../api/ml';
export default {
    name: 'xzxz1',
    data() {
        return {
            flag: false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            bottomImg: require('../../../assets/cut1/icon88.png'),
            fontsizelist: [],
            colorlist: []
        };
    },
    created() {},
    mounted() {
        AllembroiderFont().then((res) => {
            console.log(res);
            this.fontsizelist = res.data;
            this.$set(this.fontsizelist);
        });
        AllembroiderColor().then((res) => {
            console.log(res,"123213123123");
            this.colorlist = res.data;
            this.$set(this.colorlist);
        });
    },
    methods: {
        changeStyle() {
            this.flag = !this.flag;
            let div = document.getElementById('footer_choice');
            div.style.width = 0 + 'px';
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
.lie {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 800px;
}

.kuang1 {
    width: 91px;
    height: 23px;

    background: #e9e9e9;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #303030;
    text-align: center;
    line-height: 23px;
    margin-top: 12px;
}

.kuang {
    width: 91px;
    height: 23px;
    background: #f9d532;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #303030;
    text-align: center;
    line-height: 23px;
    margin-top: 12px;
}

.imgs {
    width: 143px;
    height: 143px;
    margin-top: 6px;
}

.box1 {
    width: 156px;
    height: 197px;
    background: #ffffff;
    border-radius: 3px;

    border: 1px solid #e3e3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box {
    width: 156px;
    height: 197px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #f9d805;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
