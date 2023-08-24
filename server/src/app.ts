import "dotenv/config.js"
import express from "express"
import http from "http"
import cors from "cors"
import * as socketIO from "socket.io"

import routes from "./routes/index.js"
import { PORT } from "./config/consts.js"
import { socketsConfig} from "./sockets.js"

// Intialize
const app = express()
const server = new http.Server(app)
const io = new socketIO.Server(server)

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Settings
app.use(cors())
app.use(express.json())

// Routes
app.use('/', routes)

// WebSockets
socketsConfig(io)

// Listen
server.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`)
}).on("error", (error: Error) => {
  console.log(error)
})

export {
  app,
  server
}