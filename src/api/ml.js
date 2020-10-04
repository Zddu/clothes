import request from '../utils/request';
// 获取面料数据
export const loginLogin = (data) => {
    return request({
        url: 'user/interface/login',
        method: 'POST',
        params: data
    });
};

// 用户手机号登录接口
export const phoneLogin = (data) => {
    return request({
        url: 'user/interface/phone_login',
        method: 'POST',
        params: data
    });
};
// 用户发送验证码接口
export const getCaptcha = (data) => {
    return request({
        url: 'user/interface/getCaptcha',
        method: 'POST',
        params: data
    });
};

// 面料下单获取门店列表
export const getStoreList = (data) => {
    return request({
        url: '/logic/interface/query_allstore_companyId',
        method: 'POST',
        params: data
    });
};

// 根据type查询数据
export const queryDataBytype = (data) => {
    return request({
        url: '/logic/interface/query_dataBytype',
        method: 'POST',
        params: data
    });
};

// 查询所有绣字字体
export const AllembroiderFont = (data) => {
    return request({
        url: 'logic/interface/query_AllembroiderFont',
        method: 'POST',
        params: data
    });
};

// 查询绣字色值
export const AllembroiderColor = (data) => {
    return request({
        url: 'logic/interface/query_AllembroiderColor',
        method: 'POST',
        params: data
    });
};

// 撞色列表
export const AllContrastcolorInfo = (data) => {
    return request({
        url: 'logic/interface/query_AllContrastcolorInfo',
        method: 'POST',
        params: data
    });
};
// 根据导航栏id查询板块内容
export const queryMstemplateinfo = (data) => {
    return request({
        url: 'logic/interface/query_mstemplateinfo',
        method: 'POST',
        params: data
    });
};
// 根据服装类别id查询里面的内容
export const queryCategoryinfo = (data) => {
    return request({
        url: 'logic/interface/query_categoryinfo',
        method: 'POST',
        params: data
    });
};
// 获取纽扣类别
export const getButtonSelect = (data) => {
    return request({
        url: '/fabricAndOther/getButtonSelect',
        method: 'POST',
        params: data
    });
};
// 获取具体的纽扣列表
export const getButtons = (data) => {
    return request({
        url: '/fabricAndOther/getButtons',
        method: 'POST',
        params: data
    });
};

// 模块导航栏菜单
export const queryModule = (data) => {
    return request({
        url: 'logic/interface/query_module',
        method: 'POST',
        params: data
    });
};

// 查询所有快递
export const queryAllCourier = (data) => {
    return request({
        url: 'logic/interface/query_allCourier',
        method: 'POST',
        params: data
    });
};

// 修改撞色的色值
export const updateContrastcolorcolor = (data) => {
    return request({
        url: 'logic/interface/update_Contrastcolor_color',
        method: 'POST',
        params: data
    });
};

//获取驳宽和珠边宽度
export const getBokuan = (data) => {
    return request({
        url: '/fabricAndOther/getBokuan',
        method: 'POST',
        params: data
    });
};
// 根据绣字类型查询绣字高度列表
export const getXiuziList = (data) => {
    return request({
        url: '/fabricAndOther/getXiuziList',
        method: 'POST',
        params: data
    });
};

// 个订界面获取类别和工艺数据
export const getTypeAndProcess = (data) => {
    return request({
        url: '/fabricAndOther/getTypeAndProcess',
        method: 'POST',
        params: data
    });
};

// 查询绣字位置
export const queryLocaltion = (data) => {
    return request({
        url: 'logic/interface/query_localtion',
        method: 'POST',
        params: data
    });
};

// 我的产品列表
export const queryTemplateInfoByuserId = (data) => {
    return request({
        url: 'logic/interface/query_templateInfoByuserId',
        method: 'POST',
        params: data
    });
};