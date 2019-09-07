var express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser')
const path = require('path');

var app = express();


app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'view/index.html'))
})

mongoose.connect('mongodb+srv://aji1998:aji12345@cluster0-bwklw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB Connected')
		app.listen(4000, () => console.log(`Running with port 4000`))
	})
	.catch(err => {
		console.log('Error on connecting mongodb:', err)
	})

