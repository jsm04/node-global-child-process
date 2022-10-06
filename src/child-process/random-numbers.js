import randomService from '../utilities/random.js'

process.on('message', (num) => {
	const numList = randomService.calcRandomNumbers(num)
	process.send(numList)
})
