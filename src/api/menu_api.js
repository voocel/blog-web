import {HTTP} from "@/http/http";

export function createMenuApi(data){
    return HTTP.post("/api/menu/add",data)
}

export function updateMenuApi(id,data){
    return HTTP.put("/api/menus/update/"+id,data)
}

// 菜单详情
export function getMenuDetailApi(path){
    return HTTP.get("/api/menu/detail?path=" +path)
}


export function getMenuNameListApi(){
    return HTTP.get("/api/menu/list")
}
