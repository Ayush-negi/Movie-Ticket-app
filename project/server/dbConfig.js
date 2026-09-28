const mongoose = require('mongoose')



const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected successfully')
    } 
    catch (err) 
    {
        console.log('Error connecting to the database:', err)
    }
}

module.exports =  {
    connectDb
}
