import {HTTP} from "@/http/http";

// 邮箱登录接口
export function emailLoginApi(data){
    return  HTTP.post("/api/user/login",data)
}

// 用户注销退出,token失效
export function logoutApi(){
 return HTTP.post("/api/user/logout")
}

// 用户列表
export function userListApi(params){
    return HTTP.get("/api/users",{params})
}

// 创建用户
export function userCreateApi(data){
    return HTTP.post("/api/user/add",data)
}

// 删除用户 参数是用户的id列表
export function userRemoveBatchApi(id_list){
    return HTTP.delete("/api/users", {data:{id_list}})
}

// 修改用户权限和昵称
export function userUpdateUserRoleApi(data){
    return HTTP.put("/api/user_role", data)
}


export function getQQLoginLinkApi(){
    return HTTP.get("/api/qq_login_path")
}

export function qqLoginApi(code){
    return HTTP.post("/api/login?code="+code)
}

// 用户注册
export function userRegisterApi(data){
    return HTTP.post("/api/user/register",data)
}