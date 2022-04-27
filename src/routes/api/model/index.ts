import selectSearchParams from "$lib/helpers/selectSearchParams"
import type { PrismaClient } from "@prisma/client"
import type { RequestHandler  } from "@sveltejs/kit"
 
 
export const get: RequestHandler = async ({locals}) => {

    const { Prisma } = locals 




    try {
       
 
        return {
            body:  await Prisma.model.findMany({ include: {machinery: true}}) || []
        }  
    }  catch  {
        
        return {
            status : 500,
            error: "Server error",
            body: {}
        }
    }
}


export const post: RequestHandler = async ({locals, request}) => {

    const { Prisma } = locals 

    const data = await request.json()

     try {

        console.log( await Prisma.model.create({data }))
        return { body :  await Prisma.model.create({data }) }
    } catch (error) {

        return {
            status: 500,
            error
        }
    }

}

