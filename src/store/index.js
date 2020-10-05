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
        ClothingStyle: "",//品类版型选择-->服装品类
        ClothingFormat: "",//品类版型选择-->服装品类
        ProcessType: "",//品类版型选择-->服装品类
        storeId: "",  //门店id
        storeCode: "", //门店编码
        orderName: "",//订单名称
        customerCode: "",//顾客编码
        customerName: "",//用户名称
        customerSex: "",//	用户性别
        fabricSource: "",//	面料来源
        businessSource: "",//业务类型
        courierId: "",//快递id
        packageType: "",//	包装方式
        addressType: "",//地址类型
        address: "",//	收货地址
        thirdSn: "",//第三方运单号
        categoryIds: "",//类别ids,多个以逗号隔开
        ksZhubianWidth: "",//	珠边宽度
        ksBokuan: "",//驳款
        xiuziPriceId: "",//绣字高度id
        xiuziType: "",//xiuziType	绣字类型
        xiuziWeizhi: "",//	绣字位置
        xiuziImg: "",//绣字图片Id
        xiuziColor: "",//绣字颜色id
        xiuziHeight: "",	//绣字具体高度
        zidingyiImg: "",//自定义图片,
        xiuziZiti: "",//	绣字字体id
        xiuziOneNeirong: "",//	绣字第一行内容
        xiuziTwoNeirong: "",//绣字第二行内容
        zhuangseId: "",//撞色id，多个以逗号隔开
        bodySizeIds: "",//身体尺寸ids:1/56,2/36以这种形式：1代表尺寸id,56代表尺寸1输入的值
        sizeIds: "",//体型Ids: 1/强健:1代表体型Id,强健表示选中的值
        fabricIds: "",//面料ids:1/10,2/5跟以上相同：1表示面料id,10表示输入的米数
        jingtiSize: "",//净体尺寸
        liangtiRemark: "",//	体型备注
        liangtiImgs: "",//量体图片，多个以逗号隔开
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
        },
        getClothingStyle(state) {
            return state.ClothingStyle
        },
        getClothingFormat(state) {
            return state.ClothingFormat
        },
        getProcessType(state) {
            return state.ProcessType
        },
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
        },
        ClothingStyle(state,data) {
            state.ClothingStyle = data
        },
        ClothingFormat(state,data) {
            state.ClothingFormat = data
        },
        ProcessType(state,data) {
            state.ProcessType = data
        }
    },
    actions: {},
    modules: {}
})
