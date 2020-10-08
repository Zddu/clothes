<template>
    <div class="content">
        <el-form label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="客户姓名" prop="username">
                <el-input v-model="ruleForm.username" size="large" style="width: 337px"></el-input>
            </el-form-item>
            <el-form-item label="客户编号">
                <el-input v-model="usercode" size="large" style="width: 337px"></el-input>
            </el-form-item>
            <el-form-item label="客户性别">
                <a-space>
                    <div
                        :class="{ box: index == usersex, box1: index != usersex }"
                        v-for="(item, index) in sex"
                        :key="index"
                        @click="xuanzhong(index)"
                    >
                        {{ item.sex }}
                    </div>
                </a-space>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: ''
            },
            form: this.$form.createForm(this, { name: 'coordinated' }),
            flag: false,
            bottomImg: require('../../../assets/cut1/icon88.png'),
            usercode: '',
            rules: {
                username: [{ required: true, message: '请输入客户姓名', trigger: 'blur' }]
            },
            sex: [{ sex: '男性' }, { sex: '女性' }],
            usersex: 'ddsfg'
        };
    },
    created() {},
    mounted() {
        this.ruleForm.username = this.$store.getters.getcustomerName;
        this.usercode = this.$store.getters.getcustomerCode;
        for (let i = 0; i <= this.sex.length; i++) {
            if (this.$store.getters.getcustomerSex == this.sex[i].sex) {
                this.usersex = i;
            }
        }
    },
    watch: {
        usercode(newVal, oldVal) {
            this.$store.commit('customerCode', newVal);
        },
        ruleForm: {
            deep:true,
            handler: function (newVal) {
                console.log(newVal.username)
                // console.log("b.c: "+val.c, oldVal.c);
                this.$store.commit('customerName', newVal.username);
            }
        }
    },
    methods: {
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        xuanzhong(index) {
            this.usersex = index;
            this.$store.commit('customerSex', this.sex[index].sex);
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
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
            });
        }
    }
};
</script>

<style scoped>
.box1 {
    width: 157px;
    height: 48px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    line-height: 48px;
    font-size: 16px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #828282;
    text-align: center;
}
.box {
    width: 157px;
    height: 48px;
    background: #636363;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #f9d532;
    text-align: center;
    line-height: 48px;
}
.spot-style {
    width: 85px;
    height: 85px;
    background: #555555;
    border-radius: 45px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
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
</style>
