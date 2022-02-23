import express from 'express'
import { ProfileController } from '../../controllers/profile.controllers'

const router = express.Router()

router.get('/', ProfileController.findAll)
router.post('/', ProfileController.create)
router.get('/:id', ProfileController.findOne)
export default router