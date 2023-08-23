import "dotenv/config.js"
import express from "express"
import cors from "cors"

import { PORT } from "./config/consts.js"


// Intialize
const app = express()

// Settings
app.use(cors())
app.use(express.json())

// Listen
const server = app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})

export {
  app,
  server
}