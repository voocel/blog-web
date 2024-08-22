import {HTTP} from "@/http/http";

export function getTagNameListApi (){
    return HTTP.get("/api/tag/list")
}

export function getTagArticleListApi(){
    return HTTP.get("/api/tag/list")
}