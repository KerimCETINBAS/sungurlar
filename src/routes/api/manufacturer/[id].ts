import { ManufacturerModel } from "$lib/entities/manufacturer";
import type { RequestHandler } from "@sveltejs/kit";

export const del: RequestHandler =  async ({params}) => {

  
    return {
        body: await ManufacturerModel.findByIdAndDelete(params.id)
    }
}