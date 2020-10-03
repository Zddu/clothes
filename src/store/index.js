import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 取值  this.$store.state.token 
    state: {
        titleList: [],  //点击页面会产生的顶部导航
        token: "",
        ClothingType: "", //品类版型选择-->服装类别
        ClothingCategory: "",//品类版型选择-->服装品类
    },
    //   getters 可以实时监听state值的变化(最新状态)
    // 取值  this.$store.getters.getToken 
    getters: {
        getToken(state) {
            return state.token
        },
        getClothingType(state) {
            return state.ClothingType
        },
        getClothingCategory(state) {
            return state.ClothingCategory
        }
    },
    mutations: {
        addToken(state,data) {
            state.token = data
        },
        addTitleList(state,data) {
            state.titleList = data
        },
        ClothingType(state,data) {
            state.ClothingType = data
        },
        ClothingCategory(state,data) {
            state.ClothingCategory = data
        }
    },
    actions: {},
    modules: {}
})