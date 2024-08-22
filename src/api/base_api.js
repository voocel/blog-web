import {HTTP} from "@/http/http";


export function baseListApi(url, params) {
return HTTP.get(url, {params, headers:{
  blog_referer: "admin"
  }})
}

//通用删除逻辑
export function baseDeleteApi(url,id_list){
return HTTP.delete(url,{data:{id_list}})
}

