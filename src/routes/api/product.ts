import type { PrismaClient } from "@prisma/client"
import type { RequestHandler  } from "@sveltejs/kit"
 
export const get: RequestHandler = async ({locals}) => {
  
    const { Prisma } = locals 


    
    try {
        return { body :  await Prisma.product.findMany() }
    } catch (error) {
        return {
            status: 500,
            error
        }
    }
}


export const post: RequestHandler = async ({locals, request}) => {

    const { Prisma } = locals 

    const data = await request.json()

     try {
        return { body :  await Prisma.product.create({data }) }
    } catch (error) {
        return {
            status: 500,
            error
        }
    }

}