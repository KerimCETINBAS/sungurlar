import paginate from "$lib/helpers/paginate"
import selectSearchParams from "$lib/helpers/selectSearchParams"
import type { RequestHandler } from "@sveltejs/kit"

 
export const get: RequestHandler = async ({locals, url, request, clientAddress}) => {

    const { Prisma } = locals 

    const { page, show, filter } = selectSearchParams(url, "page", "show", "filter") as { page: string | undefined, show: string | undefined, filter: string[] }

    try {
        const {take, skip, totalPages} = await paginate(Prisma.part, page, show)
        return {
            body: {
                nextPage: totalPages > Number(page) ? Number(page) + 1 : undefined,
                previousPage: Number(page) > 1 ?  Number(page) - 1 : undefined,
                totalPages,
                parts:  filter.length > 0 ?  await Prisma.unit.findMany({
                    include:  filter.reduce<Record<string,boolean>>((filters, f: string) => ({[f]: true}),{}),
                    take: take || 0,
                    skip: skip || 0
                })  : await Prisma.unit.findMany({
                    take: take || 0,
                    skip: skip || 0
                })
            }
        }  
    }  catch  {
        
        return {
            status : 500,
            error: "Server error",
            body: {}
        }
    }
}

export const post: RequestHandler = async ({request, locals}) => {
    const { Prisma } = locals 

    try {
        const data = await request.json()
        return {
            body:  await Prisma.unit.create({data})
        }
    } catch {
        return {}
    }
   


 
}