import axios from "axios";
import {useStore} from "@/stores/store"

// 响应中间件
export const HTTP = axios.create({
    timeout: 7000, // 超时响应时间7s
    baseURL: "", // 请求前缀
    headers: {
        "Content-Type": "application/json"
    }
})

// 请求中间件
HTTP.interceptors.request.use(request => {
    // 一般用于添加用户的token
    const store = useStore()
    request.headers["Authorization"] = store.userInfo.token
    return request
})

HTTP.interceptors.response.use(response => {
    return response.data
})