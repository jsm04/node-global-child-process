import { Router } from 'express'

const router = Router()

router.get('/', async (_req, res) => {
	try {
		const info = {
			entryArgs: process.argv,
			OS: process.platform,
			desktop_session: process.env.DESKTOP_SESSION,
			NodeVersion: process.version,
			rss: process.memoryUsage.rss(),
			executionPath: process.execPath,
			systemProcessId: process.env.SYSTEMD_EXEC_PID,
			processId: process.pid,
			proyectFolder: process.argv[1],
			workingDirectory: process.cwd(),
		}
		res.status(200).send({ status: 'success', info: info })
	} catch (error) {
		console.log(error)
	}
})

export default router
