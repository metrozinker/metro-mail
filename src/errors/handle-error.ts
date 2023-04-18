import { logger } from "../logger"
import { EmailError } from "./email-error"
import { ValidationError } from "./validation-error"
import { NextFunction, Request, Response } from "express"

const isDev = process.env.NODE_ENV !== "production"

export function handleError(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (err instanceof EmailError) {
		logger.error(err.message, {
			code: err.code,
			message: err.message,
			name: err.name,
			url: req.url,
			...(isDev ? { stack: err.stack } : {}),
		})
		return res.status(400).json({
			message: err.name,
		})
	}

	if (err instanceof ValidationError) {
		logger.error(err.message, {
			code: err.code,
			message: err.message,
			name: err.name,
			url: req.url,
			...(isDev ? { stack: err.stack } : {}),
		})
		return res.status(400).json({
			message: err.name,
		})
	}

	logger.error("Unkown Error", {
		message: err.message,
		name: err.name,
		...(isDev ? { stack: err.stack } : {}),
	})

	return res.status(500).json({
		message: "Unkown Error",
	})
}
