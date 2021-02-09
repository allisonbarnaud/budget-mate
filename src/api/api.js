const { pool } = require('../db/query.js')

const {docClient} = require('../db/createDataDynamo.js')

// // adding transactions with postgres
// const addTransaction = (req, res) => {
//     const { amount, details, date, category, additional, toggle } = req.body.body
//     const sql = `INSERT INTO transactions (amount, details, transactionDate, category, additionalInfo, user_id, depositWithdraw) VALUES ($1, $2, $3, $4, $5, $6, $7);`
//     pool.query(sql, [amount, details, date, category, additional, '1', toggle], (err) => {
//         console.log(err)
//         res.json({
//             message: 'successfully added'
//         })
//     })
// }

// adding transactions with Dynamo
const addTransaction = (req, res) => {

    AWS.config.update({region:"us-east-2", accessKeyId: process.env.APP_ID, secretAccessKey: process.env.APP_KEY});

    const { amount, details, date, category, additional, toggle } = req.body.body

    var params = {
        TableName:"transactions",
        Item:{
            "amount": amount,
            "details": details,
            "date": date,
            "category": category,
            "additional": additional,
            "toggle": toggle
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", params.Item.details);
        }
    });
}



const getTransactions = (req, res) => {
    const { id } = req.params
    const sql = `SELECT * FROM transactions WHERE user_id = $1 ORDER BY transactiondate DESC;`
    pool.query(sql, [id], (err, db) => {
        console.log("test2", db.rows)
    if (db.rowCount > 0) {
        res.json({
            message: 'valid request',
            data: {
                "results": db.rows
            }
        })
    }
    })
}

const getLast5Transactions = (req, res) => {
    // const { id } = req.params
    const sql = `select * from transactions order by transactiondate desc limit 5;`
    pool.query(sql, [], (err, db) => {
        console.log("test2", db.rows)
    if (db.rowCount > 0) {
        res.json({
            message: 'valid request',
            data: {
                "results": db.rows
            }
        })
    }
    })
}

const getTransactionsForGraph = (req, res) => {
    const sql = `SELECT transactiondate, depositwithdraw, SUM(amount) as Sumamount FROM transactions where depositwithdraw = false GROUP BY depositwithdraw, transactiondate order by transactiondate;`
    pool.query(sql, [], (err, db) => {
        console.log("test2", db.rows)
    if (db.rowCount > 0) {
        res.json({
            message: 'valid request',
            data: {
                "results": db.rows
            }
        })
    }
    })
}

const getTransactionsForPie = (req, res) => {
    const sql = `select category, SUM(amount) as sumamount from transactions where transactiondate > current_timestamp - interval '30 day' group by category;`
    pool.query(sql, [], (err, db) => {
        console.log("test2", db.rows)
    if (db.rowCount > 0) {
        res.json({
            message: 'valid request',
            data: {
                "results": db.rows
            }
        })
    }
    })
}

const createNewUser = (req, res) => {
    const { email, password, username } = req.body.body
    const sql = `INSERT INTO users (email, password_digest, username) VALUES ($1, $2, $3);`
    pool.query(sql, [email, password, username], (err) => {
        console.log(err)
    },
    res.json({
        message: 'successfully added'
    })
    )
}





module.exports = { addTransaction, getTransactions, createNewUser, getTransactionsForGraph, getTransactionsForPie, getLast5Transactions }