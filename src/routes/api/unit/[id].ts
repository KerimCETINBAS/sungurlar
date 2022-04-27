import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params, locals }) => {

    const { Prisma } = locals
    try {
        return {
            body: await Prisma.part.findUnique({ where: { id: Number(params.id) }  })
        }
    } catch (error) {  return {  error   }  }
}