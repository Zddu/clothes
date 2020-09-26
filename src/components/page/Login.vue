<template>
    <div class="about">
        <div class="box">
            <div>
                <img src="./../../assets/img/logo.png" alt class="box1" />
            </div>
            <div class="box1">
                <div class="size">铭朗云定制</div>
                <div class="login">
                    <div :class="{ active: zhong, notactive: !zhong }" @click="zhong = true">用户名登录</div>
                    <div :class="{ active: !zhong, notactive: zhong }" style="margin-left: 10px" @click="zhong = false">手机登录</div>
                </div>
                <div class="input">
                    <a-input size="large" v-model="userName" placeholder="请输入用户名">
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </div>
                <div class="input">
                    <a-input size="large" v-model="password" type="password" placeholder="请输入密码">
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </div>
                <div class="code">
                    <div class="input1" v-show="zhong">
                        <a-input size="large" v-model="code" placeholder="请输入密码">
                            <a-icon slot="prefix" type="lock" />
                        </a-input>
                    </div>
                    <div class="code1" v-show="zhong"></div>
                </div>
                <div>
                    <a-button class="buttonlogin" @click="login">登陆</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loginLogin } from './../../api/ml';
export default {
    name: 'login',
    data() {
        return {
            zhong: true,
            userName: '13271861525',
            password: '123456',
            code: ''
        };
    },
    methods: {
        login() {
            loginLogin({
                username: this.userName,
                password: this.password
            }).then((res) => {
                console.log(res);
                if (res.code == 0) {
                    this.$message.success(res.msg);
                    localStorage.setItem('ms_username', this.userName);
                    this.$store.commit("addToken",res.data.token)
                    console.log(this.$store.state.token )
                    this.$router.push('/');
                } else {
                    this.$message.error(res.msg);
                }
            });
        }
    }
};
</script>

<style scoped>
.buttonlogin {
    width: 340px;
    height: 48px;
    background: #f9d532;
    border-radius: 3px;
    margin-left: 45px;
    margin-top: 20px;
}
.code {
    width: 340px;
    height: 48px;
    margin-left: 45px;
    margin-top: 20px;
    display: flex;
}
.code1 {
    width: 124px;
    height: 40px;
    background-color: gray;
}
.input1 {
    width: 216px;
    height: 48px;
}
.active {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #3c3c3c;
    line-height: 28px;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.32);
}
.notactive {
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #bababa;
    line-height: 28px;
}
.login {
    display: flex;
    margin-left: 45px;
    margin-top: 28px;
}
.input {
    width: 340px;
    height: 48px;
    margin-left: 45px;
    margin-top: 20px;
}
.size {
    width: 180px;
    height: 50px;
    font-size: 36px;
    font-family: Alibaba-PuHuiTi-H, Alibaba-PuHuiTi;
    font-weight: bold;
    color: #3c3c3c;
    line-height: 50px;
    margin-top: 22px;
    margin-left: 45px;
}
.box1 {
    width: 437px;
    height: 468px;
}
.box {
    width: 846px;
    height: 468px;
    border-radius: 10px;
    display: flex;
    background-color: #ffffff;
}
.about {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background-color: #f5f6f7;
}
</style>
