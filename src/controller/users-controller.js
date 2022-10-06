import mongoose from 'mongoose'

export default class MongooseDbController {
	constructor(collection, schema) {
		mongoose.connect(process.env.DB)
		this.model = mongoose.model(collection, schema)
	}

	getAll = async () => {
		try {
			const data = await this.model.find()
			return data
		} catch (err) {
			console.error('Cannot get all: $ ' + err)
		}
	}

	getById = async (documentId) => {
		try {
			const data = await this.model.findById(documentId)
			return data
		} catch (err) {
			console.error('Cannot get by Id: $ ' + err)
		}
	}

	save = async (document) => {
		try {
			await this.model.create(document)
			console.log('Document saved')
		} catch (err) {
			console.error('Cannot save: $ ' + err)
		}
	}

	update = async (documentId, newData) => {
		try {
			await this.model.updateMany({ _id: documentId }, newData, { upsert: false })
		} catch (err) {
			console.error('Cannot save: $ ' + err)
		}
	}

	deleteById = async (documentId) => {
		try {
			await this.model.deleteMany({ _id: documentId })
			console.log('Document deleted')
		} catch (err) {
			console.error('Cannot destroy: $ ' + err)
		}
	}

	destroy = async () => {
		try {
			await this.model.deleteMany({})
			console.log('Collection destroyed')
		} catch (err) {
			console.error('Cannot destroy: $ ' + err)
		}
	}
}
