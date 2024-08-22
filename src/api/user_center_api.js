import {HTTP} from "@/http/http";

export function getUserInfoApi(){
    return HTTP.get("/api/user/info")
}

export function updateUserInfoApi(data){
    return HTTP.put("/api/user_info",data)
}

// 绑定邮箱之前发验证码
export function sendEmailCodeApi(email){
    return HTTP.post("/api/user_bind_email",{email})
}

// 绑定邮箱
export function bindEmailCodeApi(data){
    return HTTP.post("/api/user_bind_email",data)
}

// 用户修改密码
export  function updatePasswordApi(data){
 return HTTP.put("/api/tags/user_password",data)
}

// 登陆人与用户的聊天记录
export function getMessageRecordApi(user_id){
    return HTTP.post("/api/messages_record", {user_id})
}

// 发送消息
export function messageApi(data){
    return HTTP.post("/api/messages", data)
}