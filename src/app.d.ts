/// <reference types="@sveltejs/kit" />

import type { PrismaClient } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	declare namespace App {
		export interface Locals {
			Prisma: PrismaClient<Prisma.Prisma.PrismaClientOptions, never, Prisma.Prisma.RejectOnNotFound | Prisma.Prisma.RejectPerOperation | undefined>;
			hello: string;
		}
		// interface Platform {}
		// interface Session {}
		// interface Stuff {}
	}
}
