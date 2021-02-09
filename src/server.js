const express = require('express')
const app = express()
const port = 4569
const { addTransaction, getTransactions, createNewUser, getTransactionsForGraph, getTransactionsForPie, getLast5Transactions } = require('./api/api.js')


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post('/new_transactions', addTransaction)

app.get('/new_transactions/:id', getTransactions)

app.get('/new_transactions5', getLast5Transactions)

app.get('/new_transactionsForGraph', getTransactionsForGraph)

app.get('/new_transactionsForPie', getTransactionsForPie)

app.post('/new_user', createNewUser)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

