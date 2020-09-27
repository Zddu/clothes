import request from '../utils/request';
// 获取面料数据
export const loginLogin = (data) => {
    return request({
        url: 'user/interface/login',
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

