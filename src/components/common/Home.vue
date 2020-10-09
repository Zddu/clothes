<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">铭朗云定制</div>
            <div class="titlt12">
                <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#242f42"
                    text-color="#fff"
                    active-text-color="#f9d532"
                >
                    <el-menu-item  v-for="(item,index) in titlelist" :key="index" :index="(index+ 1).toString() ">{{item.titleicon}}</el-menu-item>
                    <!-- <el-menu-item index="2">消息中心</el-menu-item>
                    <el-menu-item index="3">订单管理</el-menu-item> -->
                </el-menu>
            </div>
            <div class="header-right">
                <div class="header-user-con">
                    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{ username }}
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item divided command="">修改密码</el-dropdown-item>
                            <el-dropdown-item divided command="">基本信息</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <div class="btn-bell" @click="homevue">
                        <i class="el-icon-s-home"></i>
                    </div>

                    <div class="btn-bell">
                        <el-badge :value="200" :max="99" class="item">
                            <i class="el-icon-bell"></i>
                        </el-badge>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-box">
            <router-view @getMessage="showMsg"></router-view>
        </div>
        <!-- <v-sidebar></v-sidebar> -->
        <!-- <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div> -->
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            activeIndex2: '1',
            titlelist: []
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    created() {
        bus.$on('collapse-content', (msg) => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', (msg) => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
    methods: {
        showMsg(val) {
            // methods方法  val即为子组件传过来的值
            console.log(val,"父组件");
            this.titlelist = val
            this.$set(this.titlelist)
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        homevue() {
            this.$router.push({
                path: '/'
            });
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                sessionStorage.clear();
                this.$router.push('/login');
                window.location.reload()
            }
        }
    }
};
</script>
<style>
.el-menu--horizontal > .el-menu-item {
    height: 70px;
    line-height: 70px;
}
</style>
<style scoped>
.titlt12 {
    float: left;
}
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    margin-left: 20px;
    width: 120px;
    line-height: 70px;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #f9d532;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 20px;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
    margin-right: 20px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
