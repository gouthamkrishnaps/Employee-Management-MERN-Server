require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./Router/router')


require('./DB/connection')

const ociuzServer = express()

ociuzServer.use(cors())

ociuzServer.use(express.json())

//server
ociuzServer.use(router)

const PORT = 4000 || process.env.PORT

ociuzServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

ociuzServer.get('/',(req,res)=>{
    res.send('<h1> Ociuz Server server running successfully and waiting for request</h1>')
})


