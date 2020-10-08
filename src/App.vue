<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        //在页面加载时读取localStorage里的状态信息
        // if (localStorage.getItem('store')) {
        //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))));
        //     localStorage.removeItem('store');
        // }
        // //在ios中，beforeunload被弃用改只用pagehide
        // //在页面刷新时将vuex里的信息保存到localStorage里
        // window.addEventListener('pagehide', () => {
        //     localStorage.setItem('store', JSON.stringify(this.$store.state));
        // });
        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem('store')) {
            this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
        }

        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('store', JSON.stringify(this.$store.state));
        });

        //ios废弃了beforeunload，使用pagehide代替
        window.addEventListener('pagehide', () => {
            sessionStorage.setItem('store', JSON.stringify(this.$store.state));
        });
    },
    destroyed() {
        sessionStorage.clear();
        window.location.reload();
    }
};
</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css'; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>