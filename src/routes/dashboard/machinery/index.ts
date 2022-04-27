import type { RequestHandler } from "@sveltejs/kit";
import { get as _get } from "../../api/machinery"
import {del as _del} from "../../api/machinery/[id]"

export const get: RequestHandler = async (request) => {
    const {body} = (await _get(request))
    
    return {
       body: {
           machinery : body as []
       }
    }
}


