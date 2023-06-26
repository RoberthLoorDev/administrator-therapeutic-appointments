const express = require('express')
const { Database } = require('./database')

const app = express()
app.use(express.json())

//database conecction
Database.DBConecction()

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>')
})

app.listen(3000, () => {})
