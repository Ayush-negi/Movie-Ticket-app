const express = require('express')
const dbConfig = require('./dbConfig')
const dotEnv = require('dotenv')
dotEnv.config()

const app = express()
dbConfig.connectDb()



app.get('/' , (req, res) => {
    res.send('Hello from the server!')
})



app.listen(8001, () => {
    console.log('Server is running on port 8001')
})