import axios from "axios";
import { install,unInstall } from "./createDom";
import Loading from '../components/Loading.vue';
import { Dialog } from 'vant';
// 添加CreateDom的方法
const request = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "" : "/AppPrj",//AppPrj
    timeout: 15000,
    withCredentials: true
})
let ld;
let num = 0;
//请求拦截函数
function interceptorsRequest(config) {
  if (num === 0) {
    ld = install(Loading);
  }
  num += 1;
  return config;
}
//响应拦截函数
function interceptorsResponse(res) {
  num -= 1;
  if (num === 0) {
    ld = unInstall(ld)
  }
  if(res.status === 200) {
    if(res.data.stat) {
      if(res.data.stat === '00') {
        return res.data
      }
    }
  } else {
    Dialog.alert({
      message: '连接服务器出错了',
    })
  }
  return Promise.reject(res.data.message);
}
//请求异常处理
const errHandlerRequest = (error) => {
  ld = unInstall(ld)
  Dialog.alert({
    message: '连接服务器出错了',
  })
  return Promise.reject(error);
}
//响应异常处理
const errHandlerResponse = (error) => {
  num -= 1;
  if (num === 0) {
    ld = unInstall(ld)
  }
  Dialog.alert({
    message: '连接服务器出错了',
  })
  return Promise.reject(error);
}
request.interceptors.request.use(interceptorsRequest,errHandlerRequest);
request.interceptors.response.use(interceptorsResponse,errHandlerResponse);

function get(url,params) {
    return request({
        url,
        method:'get',
        params,
    })
}
function post(url,data) {
    return request({
        url,
        method:'post',
        data,
    })
}

export default request;
export {
    post,
    get
}