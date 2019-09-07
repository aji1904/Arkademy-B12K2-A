const { Schema, model } = require('mongoose')

const workSchema = new Schema({
	name: String,
	id_salary : Schema.Types.ObjectId,
},{ versionKey: false })

module.exports = model('work', workSchema)