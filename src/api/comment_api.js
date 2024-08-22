import {HTTP} from "@/http/http";

export function commentRemoveApi(id){
    return HTTP.delete("/api/comments/"+id)
}

export function commentCreateApi(data){
    return HTTP.post("/api/comments/",data)
}

export function getArticleCommentListApi(id){
    return HTTP.get("/api/comment/article_comments/"+id)
}
