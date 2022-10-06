import { fork } from 'child_process'

import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
	try {
		// valid query should be quantity = number
		const query = parseInt(req.query.quantity)

		const querySendDefaults = query > 0 && !isNaN(query) ? query : 1000000

		const child = fork('./src/child-process/random-numbers.js')

		child.send(querySendDefaults)

		child.on('message', (numList) => {
			res.status(200).send({ status: 'success', values: numList })
		})
	} catch (error) {
		console.log(error)
	}
})

export default router
