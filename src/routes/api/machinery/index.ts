import { MachineryModel, type IMachinery } from "$lib/entities/machinery";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async (request) => {
    
    const machineries = await MachineryModel.find().populate("models").exec()

    console.log(machineries)
    return {
        body: []
    }
}


export const post: RequestHandler = async ({ request})=> {
   await ( await MachineryModel.create(await request.json())).save()

    return {
       
    }
}