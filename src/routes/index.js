import express from 'express'
import userRoutes from './api/user.routes'
import profileRoutes from './api/profile.routes'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/profiles', profileRoutes)

export default router



