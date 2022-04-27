import type { RequestHandler } from "@sveltejs/kit"
import selectSearchParams from "$lib/helpers/selectSearchParams"
export const get:RequestHandler = async  ({params, locals, url}) => {

    const { Prisma } = locals
    const { take, skip } = selectSearchParams(url, "take", "skip") as { take: string | undefined, skip: string | undefined }

    try {
            return {
                body: await Prisma.machinery.findUnique({ 
                    include: { models: true }, 
                    where: { id: Number(params.id)}})
            }
    } catch (error) {
            return {
                error
            }
    }
}


export const put: RequestHandler = async ({params, locals, request}) => {
const { Prisma } = locals


const { models } = await request.json()
return {
    body:await Prisma.machinery.update({
            where: { id: Number(params.id)},
            include: { models: true },
            data: {
                models: {
                    create: models || []
                }
            }
        })
    }
}

export const patch: RequestHandler = async ({params, request, locals}) => {

    const { unit , part, name  } = await request.json()
    try {
        return {
            body: await locals.Prisma.machinery.update({
                where: {id: Number(params.id)}, 
                include: { unit: true, part: true },
                data: {
                    name,
                    part: {
                        set: (part || []).map((p: Number) => ({id: p}))
                    },
                    unit: {
                        set: (unit || []).map((u: Number) => ({id: u}))
                    }
            }})
        }
    } catch (error) {
        return { error }
    }
}

export const del: RequestHandler =  async ({locals, params}) => {

    try {
        return {
            body: await locals.Prisma.machinery.delete({where: { id : Number(params.id)}})
        }
    } catch (error) {
        
        return { error }
    }
}