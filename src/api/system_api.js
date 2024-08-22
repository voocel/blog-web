import {HTTP} from "@/http/http";

// 网站信息数据
export function getSiteInfoApi(){
    return HTTP.get("/api/other/get_site_setting")
}

export function updateSiteInfoApi(data){
    return HTTP.put("/ohter/update_site_setting",data)
}


export function getEmailInfoApi(){
    return HTTP.get("/api/settings/email")
}

export function updateEmailInfoApi(data){
    return HTTP.put("/api/settings/email",data)
}


export function getQiniuInfoApi(){
    return HTTP.get("/api/settings/qiniu")
}

export function updateQiniuInfoApi(data){
    return HTTP.put("/api/settings/qiniu",data)
}

export function getQQInfoApi(){
    return HTTP.get("/api/settings/qq")
}

export function updateQQInfoApi(data){
    return HTTP.put("/api/settings/qq",data)
}

export function getJwtInfoApi(){
    return HTTP.get("/api/settings/jwt")
}

export function updateJwtInfoApi(data){
    return HTTP.put("/api/settings/jwt",data)
}