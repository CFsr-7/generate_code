import axios from 'axios';
import {REQUEST_URL} from "./SUCCESS";
class Request {
    /* send out new Axios request */
    request(opts) {
        const instance = axios.create({
            baseURL: REQUEST_URL,
        })
        this.setInterceptors(instance);
        return instance(opts);
    }

    // 拦截器
    setInterceptors(instance) {
        instance.interceptors.request.use((config) => {
            return config
        })

        instance.interceptors.response.use(async (res) => {
            // res.status: HTTP status 200
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }, ( err ) => {
            throw new Error("服务异常",err);
        })
    }

    /* get request */
    get(url, options) {
        return this.request({
            url: url,
            method: 'get',
            params: options,
        })
    }

    /* post request */
    post(url, options) {
        return this.request({
            url: url,
            data: options,
            method: 'post',
        })
    }

}

export const httpRequest = new Request();
