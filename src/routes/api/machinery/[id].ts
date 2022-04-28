import { MachineryModel } from "$lib/entities/machinery";
import { ModelModel } from "$lib/entities/model";
import type { RequestHandler } from "@sveltejs/kit";


export const get: RequestHandler = async ({params}) => {

   try {

    const machinery = await MachineryModel.findById(params.id).populate("models  ").lean().exec()

        return {
            body: {
                machinery
            }
        }
   } catch (error) {
       return {
           status: 500,
           error
       }
   }
}


export const del: RequestHandler = async ({params, request}) => {

   try {
        await MachineryModel.findByIdAndDelete(params.id, {
            $pull: {
                models: await request.text()
            }
        })
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


export const put: RequestHandler = async  ({params, request}) => {

    try {


        const newModel = await (await ModelModel.create({...await request.json()})).save()
    
        const updatetedMachinery = await MachineryModel.findByIdAndUpdate(params.id, {
            $push: {
                models: newModel,
                new: true
            }
        })

    } catch(error) {
    }
    return {
    }
}