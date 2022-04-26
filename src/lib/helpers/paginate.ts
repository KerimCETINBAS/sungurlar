
export default async <T>(entty: T, page: string | undefined, show: string | undefined): Promise<{
    take: number,
    skip: number,
    totalPages: number
}> => {

    const entity = await  (entty as T)//.count() 

    console.log(entity, entty)
    return {

        skip:0,// (  / Number(show) ) * Number(page) ,
        take: 0,
        totalPages: 0
    }
}