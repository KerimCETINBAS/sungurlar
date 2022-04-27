import type { RequestHandler } from "@sveltejs/kit"
import selectSearchParams from "$lib/helpers/selectSearchParams"
import { connect } from "http2"
export const get:RequestHandler = async  ({params, locals}) => {

    const { Prisma } = locals
 
    
    try {
        
        return {
            body: await Prisma.part.findUnique({ where: { id: Number(params.id) }  })
        }
    } catch (error) {  return {  error   }  }
}



export const patch: RequestHandler = async ({params, request, locals}) => {
    try {
        return {
            body: await locals.Prisma.part.update({where: {id: Number(params.id)}, data: await request.json()})
        }
    } catch (error) {
        return { error }
    }
}

export const del: RequestHandler =  async ({locals, params}) => {

    try {
        return {
            body: await locals.Prisma.part.delete({where: { id : Number(params.id)}})
        }
    } catch (error) {
        
        return { error }
    }
} 