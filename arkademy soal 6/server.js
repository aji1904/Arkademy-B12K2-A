var express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser')
const path = require('path');
const kategori = require('./model/kategori')
const work = require('./model/work')
const nama = require('./model/nama')




var app = express();


app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/view/index.html')
})


app.use('/images',
	express.static(__dirname + '/view/images/')
)

app.get('/api/kategori', async (req, res) => {
	const data = await kategori.find();
	res.send({ data });
});

app.get('/api/work', async (req, res) => {
	const data = await work.find()
	res.send({ data })
})

app.post('/api/nama', async (req, res) => {
	const newNama = new nama({
		name: req.body.nama,
		work: req.body.work,
		salary: req.body.salary
	})
	await newNama.save()
	res.send('berhasil tersimpan')
	console.log('berhasil')
})

app.get('/api/nama', async (req, res) => {
	const data = await nama.find().populate('kategori').populate('work').exec()
	res.send({ data })
})


mongoose.connect('mongodb+srv://aji1998:aji12345@cluster0-bwklw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
	.then(() => {
		// const data = kategori.create([
		// 	{
		// 		salary: 10000000
		// 	},
		// 	{
		// 		salary: 12000000
		// 	}
		// ])
		// data.then(() => {
		// 	console.log('simpan kategori berhasil');
		// })

		// const datawork = work.create([
		// 	{
		// 		name: 'Frontend Dev',
		// 		id_salary: '5d77e9d4e091c90d108b8317'
		// 	},
		// 	{
		// 		name: 'Backend Dev',
		// 		id_salary: '5d77e9d4e091c90d108b8318'
		// 	}
		// ])
		// datawork.then(() => {
		// 	console.log('simpan work berhasil')
		// })
		console.log('MongoDB Connected')
		app.listen(4000, () => console.log(`Running with port 4000`))
	})
	.catch(err => {
		console.log('Error on connecting mongodb:', err)
	})


