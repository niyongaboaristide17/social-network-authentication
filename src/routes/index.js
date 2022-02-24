import express from 'express'
import userRoutes from './api/user.routes'
import profileRoutes from './api/profile.routes'
import authRoutes from './auth/auth.routes'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/profiles', profileRoutes)
router.use('/auth', authRoutes)

export default router



