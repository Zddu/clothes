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