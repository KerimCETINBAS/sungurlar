
export default async (entty: any, page: string | undefined, show: string | undefined): Promise<{
    take: number,
    skip: number,
    totalPages: number
}> => {

    const count = await entty.count() 

    return {

        skip: page ?  Math.ceil((count / Number(show)) * (Number(page) - 1) ) : 0,
        take: Number(show) || 0,
        totalPages:  Math.ceil((count / Number(show))) || 0
    }
}