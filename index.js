const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./Routers/userRoute')
const chatRoute = require('./Routers/chatRoute')
const messageRoute = require('./Routers/messageRoute')



const app = express()

app.use(express.json())
app.use(cors())
require('dotenv').config()

app.use('/api/users', userRoute)
app.use('/api/chats', chatRoute)
app.use('/api/messages', messageRoute)


const port = process.env.PORT || 4004
const uri = process.env.ATLAS_URI

app.get('/', (req, res) => {
    res.send("Welcome to ....")
})

app.listen(port, (req, res) => {
    console.log(`Server is running in port: ${port}`)
})

mongoose.connect(uri)
.then(()=> console.log('MongoDB connected successfully'))
.catch((error) => console.log('MongoDB connected failed: ', error.message))

//Jit5NZZJON44C5XP
//LokInRuJrw5Tlg91

