import type { RequestHandler } from "@sveltejs/kit"
import selectSearchParams from "$lib/helpers/selectSearchParams"
export const get:RequestHandler = async  ({params, locals, url}) => {

    const { Prisma } = locals
    const { take, skip } = selectSearchParams(url, "take", "skip") as { take: string | undefined, skip: string | undefined }

    try {
            return {
                body: await Prisma.machinery.findUnique({where: { id: Number(params.id)}})
            }
    } catch (error) {
            return {
                error
            }
    }
}


/* 
export const put: RequestHandler = async ({params, locals, request}) => {
    const { Prisma } = locals

    return {
        body:await Prisma.category.update({
           where: { id: Number(params.id)},
           include: { products: true },
           data: {
               products: {
                    create: await request.json()
               }
           }
        })
    }
}
 */
export const patch: RequestHandler = async ({params, request, locals}) => {
    try {
        return {
            body: await locals.Prisma.machinery.update({where: {id: Number(params.id)}, data: await request.json()})
        }
    } catch (error) {
        return { error }
    }
}

export const del: RequestHandler =  async ({locals, params}) => {

    try {
        return {
            body: await locals.Prisma.category.delete({where: { id : Number(params.id)}})
        }
    } catch (error) {
        
        return { error }
    }
}