import type { Handle } from "@sveltejs/kit";
import Prisma, * as PrismaAll from "@prisma/client";

const PrismaClient = new (Prisma?.PrismaClient || PrismaAll?.PrismaClient);


export const handle: Handle = async ({event, resolve}) => {

    event.locals =  {
        Prisma: PrismaClient
    };
    return  await resolve(event);
}