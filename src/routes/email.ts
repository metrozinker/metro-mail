import ClientEmail from "../email/emails/ClientEmail"
import MetroEmail from "../email/emails/MetroEmail"
import { sendEmail } from "../email/send"
import { ValidationError } from "../errors/validation-error"
import { logger } from "../logger"
import { render } from "@react-email/render"
import { Router } from "express"

type FormType = "PROJECT" | "MODEL" | "FLOAT_PROJECT"

type EmailBodyType = {
	name: string
	email: string
	phone: string
	rut: string
	query?: string | undefined

	formType: FormType
	projectName: string
	ufPrice: string
	modelName?: string | undefined

	sourceFirst: string
	mediumFirst: string
	sourceCurrent: string
	mediumCurrent: string
	executiveName: string
	executiveEmail: string
	executivePhone: string
}

const formNameEmailMap: Record<FormType, string> = {
	PROJECT: "Formulario Contacto Proyecto",
	FLOAT_PROJECT: "Formulario Flotante Proyecto",
	MODEL: "Formulario Cotización Modelo",
}

function getFormNameForEmail(formType: FormType) {
	return formNameEmailMap[formType]
}

const EMAIL_TO = "nikosantis+metrolead@gmail.com"
const EMAIL_CC = "nikosantis+metrolead@gmail.com"

const emailRouter = Router()

emailRouter.post("/send-metro", async (req, res, next) => {
	const body = req.body as EmailBodyType

	try {
		if (!Object.keys(body).length) {
			throw new ValidationError("Validation Error")
		}

		logger.info("MESSAGE_HANDLER_REQUEST", {
			data: body,
		})

		const formName = getFormNameForEmail(body.formType)
		const emailHtml = render(
			MetroEmail({
				formName: formName,
				email: body.email,
				name: body.name,
				phone: body.phone,
				rut: body.rut,
				projectName: body.projectName,
				modelName: body.modelName,
				sourceCurrent: body.sourceCurrent,
				mediumCurrent: body.mediumCurrent,
				sourceFirst: body.sourceFirst,
				mediumFirst: body.mediumFirst,
				comment: body.query,
				mailTo: EMAIL_TO,
			}),
		)

		const emailSend = await sendEmail({
			to: EMAIL_TO,
			subject: "Test Email",
			html: emailHtml,
			// cc: EMAIL_CC
		})
		if (emailSend.messageId) {
			return res.status(200).send({ message: "Email sent" })
		}
	} catch (err) {
		next(err)
	}
})

emailRouter.post("/send-client", async (req, res, next) => {
	const body = req.body as EmailBodyType

	try {
		if (!Object.keys(body).length) {
			throw new ValidationError("Validation Error")
		}

		logger.info("MESSAGE_HANDLER_REQUEST", {
			data: body,
		})

		const emailHtml = render(
			ClientEmail({
				name: body.name,
				projectName: body.projectName,
				executiveName: body.executiveName,
				executiveEmail: body.executiveEmail,
				executivePhone: body.executivePhone,
			}),
		)

		const emailSend = await sendEmail({
			to: EMAIL_TO,
			subject: "Test Email",
			html: emailHtml,
			// cc: EMAIL_CC
		})

		if (emailSend.messageId) {
			return res.status(200).send({ message: "Email sent" })
		}
	} catch (err) {
		next(err)
	}
})

export { emailRouter }
