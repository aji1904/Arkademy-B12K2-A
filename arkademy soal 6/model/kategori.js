const { Schema, model } = require('mongoose')

const kategoriSchema = new Schema({
	salary : String,
},{ versionKey: false })

module.exports = model('kategori', kategoriSchema)