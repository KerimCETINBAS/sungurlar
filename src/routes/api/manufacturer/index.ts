import { ManufacturerModel } from "$lib/entities/manufacturer";
import type { RequestHandler } from "@sveltejs/kit";


export const get: RequestHandler = async () => {

    return {
        body: await ManufacturerModel.find().exec()
    }
}


export const post: RequestHandler = async ({request}) => {


    try {
        return {
            body: await ( await ManufacturerModel.create(await request.json())).save()
        }
    } catch  {
        return {
            status: 500
        }
    }
   
}