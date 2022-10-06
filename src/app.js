import express from 'express'
import config from './configs/config.js'
import _dotenv from './configs/dotenv.js'
import info_router from './routes/info-route.js'
import random_router from './routes/random-route.js'
import user_router from './routes/users-route.js'

const PORT = config.PORT || process.env.PORT

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api/users', user_router)

app.use('/api/info', info_router)

app.use('/api/random', random_router)

app.listen(PORT, () => {
	console.log(`Server working on ${PORT}`)
})
