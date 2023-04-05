declare namespace NodeJS {
	export interface ProcessEnv {
		readonly BASE_URL: string;
		readonly SUPABASE_URL: string;
		readonly SUPABASE_KEY: string;
	}
}
