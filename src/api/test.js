import { get, post } from "../utils/axios"

export const getInfo = (params) => {
    return get('/AppPrj4/user/userinfo.do', params);
}
export const getList = (data) => {
    return post('/AppPrj4/list/accoutList.do', data);
}