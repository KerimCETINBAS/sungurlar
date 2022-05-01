/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	declare namespace App {
		export interface Locals {
			
			hello: string;
		}
		// interface Platform {}
		// interface Session {}
		// interface Stuff {}
	}
}
