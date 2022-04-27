import { MachineryModel, type IMachinery } from "$lib/entities/machinery";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async (request) => {
    
    return {
        body: {
            machinery: await MachineryModel.find({}).exec()
        }
    }
}


