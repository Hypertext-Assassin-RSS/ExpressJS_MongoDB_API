const express = require('express')
const router = express.Router()
const app = express();

const Customer = require('../model/CustomerModel')

app.use(express.json)

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        //res.send(customers)
        res.json(customers)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    } catch (e) {
        res.send('Error :' + e)
    }
})

router.post('/', async (req, res) => {
    const customer = new Customer({
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    })

    try {
        const response = await customer.save(customer)
        res.send('Customer Saved')
    } catch (e) {
        res.send('Error :' + e)
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const customer = await Customer.findById(req.params.id)
        const response = await customer.remove()

        res.json(response)
    } catch (e) {
        res.send('Error :' + e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
            customer.id = req.body.id
            customer.name = req.body.name
            customer.address = req.body.address
            customer.salary = req.body.salary

        const response = await customer.save(customer)
        res.json(response)
    } catch (e) {
        res.send('Error :' + e)
    }
})

module.exports = router
