import { Router } from 'express'

const router = Router()

// Routes
import { createRoom } from '../controllers/create-room.js'

router.get("/", createRoom)

export default router