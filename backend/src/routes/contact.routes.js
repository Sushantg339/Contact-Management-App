import express from 'express'
import { deleteContactController, getContactController, postContactController } from '../controllers/contact.controller.js'
const router = express.Router()

router.get('/' , getContactController)
router.post('/' , postContactController)
router.delete('/:id' , deleteContactController)

export default router