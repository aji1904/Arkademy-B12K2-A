const { Schema, model } = require('mongoose')

const namaSchema = new Schema({
	name: String,
	id: String,
	id_work : Schema.Types.ObjectId,
	id_salary : Schema.Types.ObjectId,
},{ versionKey: false })

module.exports = model('nama', namaSchema)