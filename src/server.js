import express from "express"
import bodyParser from "body-parser"
import initAppRoutes from "./routes/index"
const cors = require("cors")
const { configCors } = require("./config/cors")
const { connection } = require("./config/connectDB")
require("dotenv").config()

const app = express()

const cookieParser = require("cookie-parser")

// const hostname = process.env.HOST_NAME
const PORT = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(
//     cors({
//         origin: ["http://localhost:3000", process.env.REACT_URL],
//         credentials: true,
//         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//         preflightContinue: false,
//         optionsSuccessStatus: 200,
//     })
// )
// connection()
configCors(app)

initAppRoutes(app)

// const { OAuth2Client } = require("google-auth-library")
// const client = new OAuth2Client(
//     "434535066606-gib6cr8c72avd4jt6s3h04ai21ra0leh.apps.googleusercontent.com"
// )
// const googleAuth = async (token) => {
//     try {
//         const tiket = await client.verifyIdToken({
//             idToken: token
//         })
//         const payload = tiket.getPayload()
//         console.log(payload)
//     } catch (error) {
//         console.log("error")
//     }
// }
// app.post("/gglogin", (req, res) => {
//     // console.log(req.body.token)
//     googleAuth(req.body.token)
//     res.send("1")
// })

app.use((req, res) => {
    return res.send("404 not found")
})

app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`)
})
