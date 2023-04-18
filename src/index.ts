import { handleError } from "./errors/handle-error"
import { emailRouter } from "./routes/email"
import cors from "cors"
import express from "express"

const app: express.Application = express()

app.use(
	cors({
		origin: ["*"],
	}),
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).send({
		message: "Hello",
	})
})

app.use("/email", emailRouter)

app.use(handleError)

app.listen(3001, () => {
	console.log("Express server listening on port 3001")
})
