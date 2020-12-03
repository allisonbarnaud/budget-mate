const { Pool } = require('pg')
const pool = new Pool({ database: 'budgetmate', password: 'password'})

module.exports = { pool }