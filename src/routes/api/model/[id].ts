import { MachineryModel } from "$lib/entities/machinery"
import { ModelModel } from "$lib/entities/model"
import { UnitModel } from "$lib/entities/unit"
import type { RequestHandler } from "@sveltejs/kit"


export const get: RequestHandler = async ({params, request}) => {

    
    return {
        body: await ModelModel.findById(params.id).populate("manufacturer")
    }
}

export const del: RequestHandler = async ({params, request}) => {

    try {
         await ModelModel.findByIdAndDelete(params.id)
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


 export const put: RequestHandler = async ({params, request}) => {

    const newUnit =  

    await ModelModel.findByIdAndUpdate(params.id, {

        $push: {
            units:await UnitModel.create({...await request.json()}),
            new:true
        }
    })
    
    return {
        body: await ModelModel.findById(params.id).populate("manufacturer")
    }
}
