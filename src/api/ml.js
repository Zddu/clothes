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
