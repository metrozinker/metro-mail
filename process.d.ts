declare namespace NodeJS {
	export interface ProcessEnv {
		EMAIL_FROM: string
		EMAIL_PASS: string

		AXIOM_TOKEN: string
		AXIOM_ORG_ID: string
		AXION_DATASET: string
	}
}
