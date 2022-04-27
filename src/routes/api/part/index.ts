import paginate from "$lib/helpers/paginate"
import selectSearchParams from "$lib/helpers/selectSearchParams"
import type { RequestHandler  } from "@sveltejs/kit"
 
export const get: RequestHandler = async ({locals, url, request, clientAddress}) => {

    const { Prisma } = locals 

    const { page, show, filter } = selectSearchParams(url, "page", "show", "filter") as { page: string | undefined, show: string | undefined, filter: string[] }
    
   // const {take, skip, totalPages} = await paginate<typeof Prisma.part>(Prisma.part, page, show)
   let parts = filter.length > 0 ? await Prisma.part.findMany({include:  filter.reduce<Record<string,boolean>>((filters, f: string) => ({[f]: true}),{}) })
   : await Prisma.part.findMany()


    try {
       
    
        return {
            body: {
                parts
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


export const post: RequestHandler = async ({locals, request}) => {

    const { Prisma } = locals 

    const data = await request.json()

     try {
        return { body :  await Prisma.part.create({ data }) }
    } catch (error) {
        return {
            status: 500,
            error
        }
    }

}