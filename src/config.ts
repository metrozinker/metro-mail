import * as dotenv from "dotenv"

dotenv.config()

const config = {
	EMAIL_FROM: process.env.EMAIL_FROM,
	EMAIL_PASS: process.env.EMAIL_PASS,
	AXIOM_TOKEN: process.env.AXIOM_TOKEN,
	AXIOM_ORG_ID: process.env.AXIOM_ORG_ID,
	AXION_DATASET: process.env.AXION_DATASET,
}

export default config
