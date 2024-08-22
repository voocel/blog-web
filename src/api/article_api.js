import {HTTP} from "@/http/http";

export function getCategoryListApi(){
    return HTTP.get("/api/category/list")
}

export function createArticleApi(data){
    return HTTP.post("/api/article/create",data)
}

export function updateArticleApi(id,data){
    data.id=id
    console.log(data)
    return HTTP.put("/api/article/update",data)
}


export function getArticleContentApi(id){
    return HTTP.get("/api/articles/content/"+id)
}

export function getArticleIDTitle(){
    return HTTP.get("/api/article_id_title")
}

export function getArticleCalendarApi() {
    return HTTP.get("/api/article/calendar")
}

// 文章列表
export function getArticleListApi(params){
    return HTTP.get("/api/article/list",{params})
}

export function getArticleDetailApi(id){
    return HTTP.get("/api/article/detail/"+id)
}

export function articleCollectApi(id){
    return HTTP.post("/api/articles/collects",{id})
}

export function articleDiggApi(id){
    return HTTP.post("/api/article/like/"+id)
}

export function searchArticleApi(params){
    return HTTP.get("/api/articles/text",{params})
}

