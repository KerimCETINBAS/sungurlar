import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {

   
    return {
        body : {
            data : "data 1111"
        }
    }
}


