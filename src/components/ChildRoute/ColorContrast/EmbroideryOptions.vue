<template>
    <div class="content">
        <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label="绣字类型">
                <a-select
                    size="large"
                    placeholder="请选择绣字类型"
                    v-model="xiuzaileixing"
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
                    v-model="xiuziweizhixiao"
                    style="width: 337px"
                    @change="handleSelectChange2"
                >
                    <a-select-option :value="item.xiuziLocaltion" v-for="(item, index) in xiuziweizhi" :key="index">{{
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
                <a-select size="large" placeholder="请选择绣字位置" v-model="xiuzigaodu" style="width: 337px" @change="handleSelectChange1">
                    <a-select-option :value="item.embroideredHeight" v-for="(item, index) in xiuziaddress" :key="index">{{
                        item.embroideredHeight
                    }}</a-select-option>
                </a-select>
            </a-form-item>

            <!-- <a-form-item label="自定义图形" v-show="tuxingchuan">
                
            </a-form-item> -->
            <a-form-item label="自定义图形" v-show="tuxingchuan">
                <el-upload
                    action="http://clound_clothing.wenkangkeji.com/mlcc/user/interface/uploadImage"
                    list-type="picture-card"
                    :limit= "1"
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
</template>

<script>
import { AllembroiderFont, AllembroiderColor, getXiuziList, queryLocaltion } from './../../../api/ml';
export default {
    name: 'xzxz1',
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
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
            imageUrl: '',
            tuxingchuan: false,
            xiuziweizhi: '',
            xiuziweizhixiao: '',
            xiuzaileixing: '',
            xiuzigaodu: ''
        };
    },
    watch: {
        size11(newVal, oldVal) {
            this.$store.commit('xiuziOneNeirong', newVal);
        },
        size22(newVal, oldVal) {
            this.$store.commit('xiuziTwoNeirong', newVal);
        }
    },
    created() {},
    mounted() {
        this.xiuzigaodu = this.$store.getters.getxiuziHeight;
        this.size22 = this.$store.getters.getxiuziTwoNeirong;
        this.size11 = this.$store.getters.getxiuziOneNeirong;
        this.xiuzaileixing = this.$store.getters.getxiuziType;
        if (this.xiuzaileixing == '图片') {
            this.tuxingchuan = true;
        } else {
            this.tuxingchuan = false;
        }
        this.xiuziweizhixiao = this.$store.getters.getxiuziWeizhi;
        AllembroiderFont().then((res) => {
            console.log(res);
            this.fontsizelist = res.data;
            this.$set(this.fontsizelist);
            for (let i = 0; i <= res.data.length; i++) {
                if (this.$store.getters.getxiuziZiti == res.data[i].id) {
                    this.zixuan = i;
                }
            }
        });
        AllembroiderColor().then((res) => {
            console.log(res, '123213123123');
            this.colorlist = res.data;
            this.$set(this.colorlist);
            for (let i = 0; i <= res.data.length; i++) {
                if (this.$store.getters.getxiuziColor == res.data[i].id) {
                    this.colorxuan = i;
                }
            }
        });
        queryLocaltion({
            category_ids: this.$store.getters.getcategoryIds
        }).then((res) => {
            console.log(res, '>?>>>>');
            this.xiuziweizhi = res.data;
            this.$set(this.xiuziweizhi);
        });
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
            this.$store.commit('zidingyiImg', res.data);
        },
        colorxuan1(index) {
            this.colorxuan = index;
            console.log(this.colorlist);
            this.$store.commit('xiuziColor', this.colorlist[index].id);
        },
        sizexuan(index) {
            this.zixuan = index;
            console.log(this.fontsizelist);
            this.$store.commit('xiuziZiti', this.fontsizelist[index].id);
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
            this.$store.commit('xiuziType', value);
            this.xiuzaileixing = value;
            if (value == '图片') {
                this.tuxingchuan = true;
            } else {
                this.tuxingchuan = false;
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
            this.$store.commit('xiuziHeight', value);
            this.xiuzigaodu = value;
            console.log(this.xiuziaddress);
            this.$store.commit('xiuziPriceId', this.xiuziaddress[value].id);
        },
        handleSelectChange2(value) {
            console.log(value);
            this.$store.commit('xiuziWeizhi', value);
            this.xiuziweizhixiao = value;
        }
    }
};
</script>
<style>
.el-upload__input {
    display: none !important;
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
