import express from 'express'
import Middleware from '../../middlewares'
import RoomValidator from '../../validators/RoomValidator'
import RoomController from '../../controllers/RoomController'

const router = express.Router()

router.post('/', [RoomValidator.create, Middleware.Auth], RoomController.create)
router.patch('/:roomName', Middleware.Auth, RoomController.update)
router.delete('/:roomName', Middleware.Auth, RoomController.delete)

export default router
