import {HTTP} from "@/http/http";

export function imageRenameApi(data) {
    return HTTP.put("/api/banner/images", data)
}

export function imageNameListApi() {
    /*
    [{
            "id": 1,
            "path": "/uploads/file/checken_logo.png",
            "name": "checken_logo.png"
        }]
    */
    return HTTP.get("/api/banner/images")
}


export function uploadImageApi(file) {
    return new Promise((resolve, reject) => {
        const form = new FormData();
        form.append('image', file);
        HTTP.post("/api/image", form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => resolve(res))
            .catch((error) => reject(error));
    })
}