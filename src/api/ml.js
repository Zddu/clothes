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
export const getStoreList = () => {
    return request({
        url: '/fabric/getStoreList',
        method: 'POST',
    });
};
// 面料下单获取门店列表
export const queryModule = () => {
    return request({
        url: 'logic/interface/query_module',
        method: 'POST',
    });
};
// 面料下单获取门店列表
export const queryMstemplateinfo = (data) => {
    return request({
        url: 'logic/interface/query_mstemplateinfo',
        method: 'post',
        params:data
    });
};
// 根据服装类别id查询里面的内容
export const queryCategoryinfo = (data) => {
    return request({
        url: 'logic/interface/query_categoryinfo',
        method: 'post',
        params:data
    });
};
