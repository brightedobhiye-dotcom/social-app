const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require('mongoose')
mongoose.connect(process.env.mongo_uri)
const con = mongoose.connection
con.on('open', error => {
    if(error) {
        console.log(`Error connecting to the database ${error}`)
    } else {
        console.log('Connected to the Database')
    }
})


//routes
app.use('/auth', require('./route/auth'))
app.use('/profile', require('./route/profile'))


const port = process.env.PORT || 4600
app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})

module.exports = app