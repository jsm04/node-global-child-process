import mongoose from 'mongoose'

import MongooseDbController from '../controller/users-controller.js'

const collection = 'users'

const userSchema = mongoose.Schema(
	{
		email: { type: String, required: true },
		name: { type: String, required: true },
		lastname: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
)

class UserManager extends MongooseDbController {
	constructor() {
		super(collection, userSchema)
	}
}

const userService = new UserManager()

export default userService
