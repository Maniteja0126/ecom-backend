const express = require('express')
const cors = require('cors')

const products = require('./db/products')
const users = require('./db/users')

// Creating a server

const app=express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
    res.send('Hello from Express')
})

//Getting all products

app.get("/api/products" , (req,res)=>{
    res.status(200).json(products)
})

app.post("/api/auth/login", (req,res) =>{
    console.log(req)
})

app.listen(3000, ()=>{
    console.log("server is up and running")
})
