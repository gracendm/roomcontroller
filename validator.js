import { body, param } from 'express-validator'

class RoomValidator {
  static create = [
    body('roomName').exists().isString(),
  ]
}

export default RoomValidator
