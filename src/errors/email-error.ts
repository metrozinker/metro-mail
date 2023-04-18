export class EmailError extends Error {
	code: string
	constructor(message: string, code: string) {
		super(message)
		this.name = "EmailError"
		this.code = code
	}
}
