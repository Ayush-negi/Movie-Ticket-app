const express = require('express')
const cors = require('cors')
const dbConfig = require('./dbConfig')
const dotEnv = require('dotenv')
dotEnv.config()
const app = express()
dbConfig.connectDb()

const userRoutes = require('./routes/user.route.js')

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"

}))
app.use('/api/auth', userRoutes)




app.listen(8001, () => {
    console.log('Server is running on port 8001')
})