import {HTTP} from "@/http/http";
// 发布广告
export function createAdvertApi(data){
    return HTTP.post("/api/advert/create", data)
}
// 更新广告
export function updateAdvertApi(id, data){
    return HTTP.put("/api/advert/update" + id, data)
}


export function getAdvertListApi(params){
    return HTTP.get("/api/advert/list",{params})
}