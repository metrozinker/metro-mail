import config from "../config"
import { WinstonTransport as AxiomTransport } from "@axiomhq/axiom-node"
import winston from "winston"

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	defaultMeta: { service: "metro-email" },
	transports: [
		new AxiomTransport({
			dataset: config.AXION_DATASET,
			token: config.AXIOM_TOKEN,
			orgId: config.AXIOM_ORG_ID,
		}),
	],
})

if (process.env.NODE_ENV !== "production") {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		}),
	)
}

export { logger }
