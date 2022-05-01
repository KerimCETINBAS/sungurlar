import { MachineryModel } from "$lib/entities/machinery";
import { ModelModel } from "$lib/entities/model";
import type { RequestHandler } from "@sveltejs/kit";
import { Types } from "mongoose"
export const get: RequestHandler = async ({params}) => {

   try {
        console.log("get")
        const machinery = await MachineryModel.findById(params.id).populate("models")


        
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



export const put: RequestHandler = async ({request, params}) => {

    const {name} = await request.json()

    const newModel = await ModelModel.create({name})
    const updatedMachinery = await MachineryModel.findByIdAndUpdate(params.id, {
        $push: {
            models:newModel,
            upsert: true
        }}).populate("models")
        
    return {
        body: {
            model: newModel
        }
    }
}
export const patch: RequestHandler = async ({params, request}) => {

    try {

         const deleted = await MachineryModel.findByIdAndUpdate(params.id, await request.json(), {new: true}).populate("models").exec()
         deleted.save()
         console.log(deleted)
         return {
             body: { 
                machinery:deleted
             },
             status: 200
         }
    } catch (error) {
        console.log(error)
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
