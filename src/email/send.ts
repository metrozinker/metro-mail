import config from "../config"
import { EmailError } from "../errors/email-error"
import { logger } from "../logger"
import { createTransport } from "nodemailer"

type Address = {
	name: string
	address: string
}

type EmailPayloadType = {
	to: string | Address | Array<string | Address> | undefined
	subject: string
	html: string
	cc?: string | Address | Array<string | Address> | undefined
}

const EMAIL_FROM = config.EMAIL_FROM
const EMAIL_PASS = config.EMAIL_PASS

const smtpOptions = {
	port: 587,
	host: "smtp.office365.com",
	auth: {
		user: EMAIL_FROM,
		pass: EMAIL_PASS,
	},
	secure: false,
}

export async function sendEmail(data: EmailPayloadType) {
	logger.info("SEND_EMAIL", {
		data: {
			subject: data.subject,
		},
	})
	const transporter = createTransport(smtpOptions)

	try {
		const response = await transporter.sendMail({
			from: EMAIL_FROM,
			...data,
		})
		logger.info("SEND_EMAIL_SUCCESS", {
			data: response,
		})
		return response
	} catch (err) {
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const error = err as any
		throw new EmailError(error.message, error.code as string)
	}
}
