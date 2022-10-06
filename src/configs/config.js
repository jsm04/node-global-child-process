import minimist from 'minimist'

const { PORT } = minimist(process.argv.slice(2), {
	alias: { p: 'PORT' },
	default: { p: process.env.PORT },
})

const config = {
	PORT,
}
export default config
