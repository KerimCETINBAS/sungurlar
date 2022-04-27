import selectSearchParams from "$lib/helpers/selectSearchParams"
import type { RequestHandler  } from "@sveltejs/kit"
import { MachineryModel, type IMachinery } from "$lib/entities/machinery"
 
export const get: RequestHandler = async () => {




    try {
        
       
        
        return {
            body: await MachineryModel.find()
        }  
    }  catch  {
        
        return {
            status : 500,
            error: "Server error",
            body: {}
        }
    }
}



export const post: RequestHandler = async ({ request}) => {


    const data = await request.json()

     try {
        console.log(data)
        return {
             body :  await (await MachineryModel.create({ ...data  })).save()
        }
    } catch (error) {

        return {
            status: 500,
            error
        }
    }

}


