import express from 'express'

import authRouter from './auth.js'
import eventRouter from './event.js'
import { imageRouter, imagesRouter } from './image.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Photo Sharing API!' })
})

router.use('/auth', authRouter)
router.use('/event', eventRouter)
router.use('/image', imageRouter)
router.use('/images', imagesRouter)

export default router
