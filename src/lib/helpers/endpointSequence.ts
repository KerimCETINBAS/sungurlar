import type { RequestHandler, RequestHandlerOutput } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit/types/private";

export async function endpointSequence(event:RequestEvent<Record<string, any>>,handlers: RequestHandler[]): Promise<RequestHandlerOutput> {
    for await (const handler of handlers ) {
        try {
            const response: RequestHandlerOutput<any> = await handler(event)
            if(response.body == undefined && response.status == undefined ) {
            continue;
            }  else {
                return response
            }
        } catch  { return { status: 500 }}
    }
    return {}
}