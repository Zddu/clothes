<template>
    <div class="content">
        <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label="绣字类型">
                <a-select
                    size="large"
                    v-decorator="['gender', { rules: [{ required: true, message: '请选择绣字类型' }] }]"
                    placeholder="请选择绣字类型"
                    style="width: 337px"
                    @change="handleSelectChange"
                >
                    <a-select-option value="文字">文字</a-select-option>
                    <a-select-option value="图片">图片</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="绣字位置">
                <a-select
                    size="large"
                    placeholder="请选择绣字位置"
                    style="width: 337px"
                    @change="handleSelectChange2"
                >
                    <a-select-option :value="item.embroideredHeight" v-for="(item, index) in xiuziweizhi" :key="index">{{
                        item.xiuziLocaltion
                    }}</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="绣字第一行" v-show="!tuxingchuan">
                <a-input size="large" style="width: 337px" v-model="size11" />
            </a-form-item>

            <a-form-item label="绣字第二行" v-show="!tuxingchuan">
                <a-input size="large" style="width: 337px" v-model="size22" />
            </a-form-item>

            <a-form-item label="字体选择">
                <div class="lie">
                    <div
                        :class="{ box: index == zixuan, box1: index != zixuan }"
                        v-for="(item, index) in fontsizelist"
                        :key="index"
                        @click="sizexuan(index)"
                    >
                        <img :src="item.embroideredImage" alt class="imgs" />
                        <div :class="{ kuang: index == zixuan, kuang1: index != zixuan }">{{ item.embroideredName }}</div>
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
                    <div
                        :class="{ box: index == colorxuan, box1: index != colorxuan }"
                        v-for="(item, index) in colorlist"
                        :key="index"
                        @click="colorxuan1(index)"
                    >
                        <img :src="item.colorImg" alt class="imgs" />
                        <div :class="{ kuang: index == colorxuan, kuang1: index != colorxuan }">{{ item.colorName }}</div>
                    </div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                    <div style="width: 156px"></div>
                </div>
            </a-form-item>

            <a-form-item label="绣字高度" v-show="tuxingchuan">
                <a-select
                    size="large"
                    placeholder="请选择绣字位置"
                    style="width: 337px"
                    @change="handleSelectChange1"
                >
                    <a-select-option :value="item.embroideredHeight" v-for="(item, index) in xiuziaddress" :key="index">{{
                        item.embroideredHeight
                    }}</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="自定义图形" v-show="tuxingchuan">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { AllembroiderFont, AllembroiderColor, getXiuziList ,queryLocaltion} from './../../../api/ml';
export default {
    name: 'xzxz1',
    data() {
        return {
            flag: false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            bottomImg: require('../../../assets/cut1/icon88.png'),
            fontsizelist: [],
            colorlist: [],
            xiuziaddress: [],
            size11: '',
            size22: '',
            zixuan: '100032',
            colorxuan: '281484',
            imageUrl: "",
            tuxingchuan: false,
            xiuziweizhi: ""
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
            console.log(res, '123213123123');
            this.colorlist = res.data;
            this.$set(this.colorlist);
        });
        queryLocaltion({
            category_ids: "54,56"
        }).then((res) => {
            console.log(res,">?>>>>");
            this.xiuziweizhi = res.data
            this.$set(this.xiuziweizhi)
        });
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        colorxuan1(index) {
            this.colorxuan = index;
        },
        sizexuan(index) {
            this.zixuan = index;
        },
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
            if(value == "图片") {
                this.tuxingchuan = true
            } else {
                this.tuxingchuan = false
            }
            getXiuziList({
                xiuzitype: value
            }).then((res) => {
                console.log(res);
                this.xiuziaddress = res.data;
                this.$set(this.xiuziaddress);
            });
        },
        handleSelectChange1(value) {
            console.log(value);
        },
        handleSelectChange2(value) {
            console.log(value);
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
