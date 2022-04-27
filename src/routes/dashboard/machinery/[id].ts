import { MachineryModel } from "$lib/entities/machinery";
import type { RequestHandler } from "@sveltejs/kit";
import { get as _get } from "../../api/machinery/[id]"


export const get: RequestHandler = async (request) => {

    const m = await _get(request)

    return {
        body: m.body
    }
}


export const del: RequestHandler = async ({params}) => {

   try {
        await MachineryModel.findByIdAndDelete(params.id)
        return {
        status: 200
        }
   } catch (error) {
  
        return {
            status: 500,
            error
        }
   }
}