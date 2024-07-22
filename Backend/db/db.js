const mongoose = require('mongoose');
//id and pass
//Haritest KdvK7ViBr1d27qzN

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    } catch (error) {
        console.log('DB connection error');
    }
}

module.exports = {db}