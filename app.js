const express = require('express')
const mongoose = require('mongoose')

const Customer = require('./routes/Customer')

const app = express()
const port = 4000



/*const url = 'mongodb://127.0.0.1/express'*/

const url = `mongodb://mongo:y8nqeYlqtOawgaJnva0m@containers-us-west-131.railway.app:6522`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)
    .then( () => {
    console.log('Connected to the database ')
})
    .catch( (err) => {
        console.error(`Error connecting to the database ${err}`);
    })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/customer',Customer)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})
