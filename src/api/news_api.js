import {HTTP} from "@/http/http";

export function getNewsApi(id,size=1,headers){
    return HTTP.post("/api/other/news",{id,size},{headers:headers})
}
