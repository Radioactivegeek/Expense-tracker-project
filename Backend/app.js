const express = require('express')
const cors= require('cors')
const { db } = require('./db/Db.JS');
const {readdirSync} = require('fs')
const { route } = require('./routes/transactions')
const app = express()

//chatgptforntenduse
const cors = require('cors');
app.use(cors());
//till here

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({}))


//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
        app.listen(PORT, () => {
            console.log('listening to port: ', PORT)
        })
}

server()