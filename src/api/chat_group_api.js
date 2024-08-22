import {HTTP} from "@/http/http";


// 群聊聊天记录
export function chatGroupApi(params){
return HTTP.get("/api/chat_groups_records",{params})
}