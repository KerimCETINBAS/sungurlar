import type { RequestHandler } from "@sveltejs/kit";
import { get as _get } from "../../api/machinery/[id]"


export const get: RequestHandler = async (request) => {

    const m = await _get(request)

    return {
        body: m.body
    }
}


export const del: RequestHandler = async (request) => {
    console.log("del")
    //const {body} = (await _get(request))
    
    //await _del(request)
    return {
       body: "ok"
    }
}