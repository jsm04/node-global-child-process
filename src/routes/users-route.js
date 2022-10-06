import { Router } from 'express'

import userService from '../models/users-model.js'

import randomService from '../utilities/random.js'

const router = Router()

router.get('/', async (_req, res) => {
	try {
		const users = await userService.getAll()
		res.status(200).send({ status: 'success', users: users })
	} catch (error) {
		console.log(error)
	}
})

router.get('/generate', async (_req, res) => {
	try {
		await userService.save(randomService.createMockUser())
		res.status(200).send({ status: 'success', message: 'Random user generated' })
	} catch (error) {
		console.log(error)
	}
})

export default router
