import express from "express"

// Initialize
const router = express.Router()

// Static imports
import('../routes/create-room.js').then( module => {
  router.use('/create-room', module.default)
})

export default router