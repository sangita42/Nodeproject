const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')
const router = require('./routes/routes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/learning", { useUnifiedTopology: true })

app.use('/', router)

app.listen(3000, function(){
    console.log("server started on 3000")
})