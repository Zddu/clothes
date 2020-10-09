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

         // `````````````华丽的分割线········································

        storeId: "",  //门店id          √
        storeCode: "", //门店编码        √
        orderName: "",//订单名称
        customerCode: "",//顾客编码         √
        customerName: "",//用户名称          √
        customerSex: "",//	用户性别         √
        fabricSource: "",//	面料来源        √
        businessSource: "",//业务类型       √
        courierId: "",//快递id              √
        packageType: "",//	包装方式            √
        addressType: "",//地址类型           √
        address: "",//	收货地址            √
        thirdSn: "",//第三方运单号          √
        categoryIds: "",//类别ids,多个以逗号隔开         √
        ksZhubianWidth: "",//	珠边宽度        √
        ksBokuan: "",//驳款                     √
        xiuziPriceId: "",//绣字高度id            √
        xiuziType: "",//xiuziType	绣字类型    √
        xiuziWeizhi: "",//	绣字位置            √
        xiuziImg: "",//绣字图片Id
        xiuziColor: "",//绣字颜色id              √
        xiuziHeight: "",	//绣字具体高度          √
        zidingyiImg: "",//自定义图片,
        xiuziZiti: "",//	绣字字体id              √
        xiuziOneNeirong: "",//	绣字第一行内容      √
        xiuziTwoNeirong: "",//绣字第二行内容         √
        zhuangseId: "",//撞色id，多个以逗号隔开        √
        bodySizeIds: "",//身体尺寸ids:1/56,2/36以这种形式：1代表尺寸id,56代表尺寸1输入的值      √
        sizeIds: "",//体型Ids: 1/强健:1代表体型Id,强健表示选中的值               √
        fabricIds: "",//面料ids:1/10,2/5跟以上相同：1表示面料id,10表示输入的米数
        jingtiSize: "",//净体尺寸
        liangtiRemark: "",//	体型备注            √
        liangtiImgs: "",//量体图片，多个以逗号隔开      √

        // `````````````华丽的分割线········································


        shopname: "", //门店名称
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
        getstoreId(state) {
            return state.storeId
        },
        getstoreCode(state) {
            return state.storeCode
        },
        getshopname(state) {
            return state.shopname
        },
        getfabricSource(state) {
            return state.fabricSource
        },
        getbusinessSource(state) {
            return state.businessSource
        },
        getpackageType(state) {
            return state.packageType
        },
        getaddressType(state) {
            return state.addressType
        },
        getaddress(state) {
            return state.address
        },
        getcourierId(state) {
            return state.courierId
        },
        getthirdSn(state) {
            return state.thirdSn
        },
        getcustomerCode(state) {
            return state.customerCode
        },
        getcustomerSex(state) {
            return state.customerSex
        },
        getcustomerName(state) {
            return state.customerName
        },
        getksBokuan(state) {
            return state.ksBokuan
        },
        getksZhubianWidth(state) {
            return state.ksZhubianWidth
        },
        getxiuziWeizhi(state) {
            return state.xiuziWeizhi
        },
        getxiuziType(state) {
            return state.xiuziType
        },
        getxiuziOneNeirong(state) {
            return state.xiuziOneNeirong
        },
        getxiuziTwoNeirong(state) {
            return state.xiuziTwoNeirong
        },
        getxiuziHeight(state) {
            return state.xiuziHeight
        },
        getxiuziColor(state) {
            return state.xiuziColor
        },
        getxiuziPriceId(state) {
            return state.xiuziPriceId
        },
        getxiuziZiti(state) {
            return state.xiuziZiti
        },
        getcategoryIds(state) {
            return state.categoryIds
        },
        getbodySizeIds(state) {
            return state.bodySizeIds
        },
        getliangtiRemark(state) {
            return state.liangtiRemark
        },
        getsizeIds(state) {
            return state.sizeIds
        },
        getfabricIds(state) {
            return state.fabricIds
        },
        getzhuangseId(state) {
            return state.zhuangseId
        },
        getzidingyiImg(state) {
            return state.zidingyiImg
        },
        getliangtiImgs(state) {
            return state.liangtiImgs
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
        },
        ClothingStyle(state,data) {
            state.ClothingStyle = data
        },
        ClothingFormat(state,data) {
            state.ClothingFormat = data
        },
        ProcessType(state,data) {
            state.ProcessType = data
        },
        storeId(state,data) {
            state.storeId = data
        },
        storeCode(state,data) {
            state.storeCode = data
        },
        shopname(state,data) {
            state.shopname = data
        },
        fabricSource(state,data) {
            state.fabricSource = data
        },
        businessSource(state,data) {
            state.businessSource = data
        },
        packageType(state,data) {
            state.packageType = data
        },
        addressType(state,data) {
            state.addressType = data
        },
        address(state,data) {
            state.address = data
        },
        courierId(state,data) {
            state.courierId = data
        },
        thirdSn(state,data) {
            state.thirdSn = data
        },
        customerCode(state,data) {
            state.customerCode = data
        },
        customerSex(state,data) {
            state.customerSex = data
        },
        customerName(state,data) {
            state.customerName = data
        },
        ksBokuan(state,data) {
            state.ksBokuan = data
        },
        ksZhubianWidth(state,data) {
            state.ksZhubianWidth = data
        },
        xiuziWeizhi(state,data) {
            state.xiuziWeizhi = data
        },
        xiuziType(state,data) {
            state.xiuziType = data
        },
        xiuziOneNeirong(state,data) {
            state.xiuziOneNeirong = data
        },
        xiuziTwoNeirong(state,data) {
            state.xiuziTwoNeirong = data
        },
        xiuziHeight(state,data) {
            state.xiuziHeight = data
        },
        xiuziColor(state,data) {
            state.xiuziColor = data
        },
        xiuziPriceId(state,data) {
            state.xiuziPriceId = data
        },
        xiuziZiti(state,data) {
            state.xiuziZiti = data
        },
        categoryIds(state,data) {
            state.categoryIds = data
        },
        bodySizeIds(state,data) {
            state.bodySizeIds = data
        },
        liangtiRemark(state,data) {
            state.liangtiRemark = data
        },
        sizeIds(state,data) {
            state.sizeIds = data
        },
        zhuangseId(state,data) {
            state.zhuangseId = data
        },
        fabricIds(state,data) {
            state.fabricIds = data
        },
        zidingyiImg(state,data) {
            state.zidingyiImg = data
        },
        liangtiImgs(state,data) {
            state.liangtiImgs = data
        }
    },
    actions: {

    },
    modules: {}
})
