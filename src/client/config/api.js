import axios from 'axios'
import qs from 'qs'

let axiosIns = axios.create({});

// if (process.env.NODE_ENV == 'development') {
//   axiosIns.defaults.baseURL = '***';
// } else if (process.env.NODE_ENV == 'debug') {
//   axiosIns.defaults.baseURL = '***';
// } else if (process.env.NODE_ENV == 'production') {
//   axiosIns.defaults.baseURL = '***';
// }

axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.transformRequest = [function (data) {
  //数据序列化
  return qs.stringify(data);
}];
axiosIns.defaults.validateStatus = function (status) {
  return true;
};

//请求拦截
axiosIns.interceptors.request.use(function (config) {
  //配置config
  config.headers.Accept = 'application/json';
  return config;
})

//响应拦截
axios.interceptors.response.use(function (response) {
  let data = response.data;
  let status = response.status;
  if (status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
})

var ajaxMethod = ['get', 'post'];
var api = {};

ajaxMethod.forEach((method)=> {
  //数组取值的两种方式
  api[method] = function (uri, params, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, params, config).then((response)=> {
        console.log(params)
        /*根据后台数据进行处理
         ...
         */
        if (response.data.statusCode) {


        } else {
          resolve(response);
        }
      }).catch((response)=> {
        //reject response
      })
    })
  }
});

export default api;
