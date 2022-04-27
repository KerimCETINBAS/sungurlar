import type { RequestHandler } from "@sveltejs/kit"
import selectSearchParams from "$lib/helpers/selectSearchParams"


import { MachineryModel, type IMachinery } from "$lib/entities/machinery"
export const get:RequestHandler = async  ({params,  url}) => {

    const { take, skip } = selectSearchParams(url, "take", "skip") as { take: string | undefined, skip: string | undefined }

    try {
            return {
                body: {
                    machineries: await MachineryModel.findById(params.id)
                }
            }
    } catch (error) {
            return {
                error
            }
    }
}


export const put: RequestHandler = async ({params,  request}) => {


    return {}
}

export const patch: RequestHandler = async ({params, request, locals}) => {

    
  return {}
}

export const del: RequestHandler =  async ({params}) => {

   return {}
}