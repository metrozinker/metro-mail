export class ValidationError extends Error {
	code: string
	constructor(message: string) {
		super(message)
		this.name = "ValidationError"
	}
}
