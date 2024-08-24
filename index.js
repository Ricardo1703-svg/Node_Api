import express from 'express'

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(require('./src/routes/index'))


app.listen(4000)
console.log('Servidor en el puerto 4000')