const express = require('express')
const mongoose = require('mongoose')

const Customer = require('./routes/Customer')

const app = express()
const port = 4000



const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/customer',Customer)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})
