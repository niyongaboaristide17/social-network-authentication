import express from 'express'
import { UserController } from '../../controllers/user.controllers'

const router = express.Router()

router.post('/', UserController.create)
router.get('/:pk', UserController.findByPk)

export default router