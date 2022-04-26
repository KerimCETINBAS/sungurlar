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



export const put: RequestHandler = async ({params, locals, request}) => {
    const { Prisma } = locals
    const data = await request.json()
    await Prisma.$connect();
    return {
        body:await Prisma.part.update({
           where: { id: Number(params.id)},
           include: { machinary: true },
           data: {
               name: data.name,
               
               machinary: {
                   set: (data.machinery || []).map((id: number) => ({ id: id})) || [],
                 
               },
               application: {
                   set: (data.application || []).map((id: number) => ({ id: id})) || [],
               }
           }
        })
    }
}
/* 
export const patch: RequestHandler = async ({params, request, locals}) => {
    try {
        return {
            body: await locals.Prisma.product.update({where: {id: Number(params.id)}, data: await request.json()})
        }
    } catch (error) {
        return { error }
    }
}

export const del: RequestHandler =  async ({locals, params}) => {

    try {
        return {
            body: await locals.Prisma.product.delete({where: { id : Number(params.id)}})
        }
    } catch (error) {
        
        return { error }
    }
} */