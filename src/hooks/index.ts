import type { Handle } from "@sveltejs/kit";
import { connect } from "mongoose"
connect(import.meta.env.VITE_DB_URI).
  catch(error => console.error(error));

export const handle: Handle = async ({event, resolve}) => {

   
    return  await resolve(event);
}