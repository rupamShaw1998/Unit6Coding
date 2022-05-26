const connect = require('./configs/db')
const express = require('express')

const FloorController = require('./controllers/floor.controller')
const AssistantController  = require('./controllers/assistant.controller')

const app = express()

app.use(express.json())

app.use('/',FloorController)
app.use('/assist',AssistantController)



app.listen('5000',async()=> {
    try{
      await connect()

    }
    catch(err){
        console.log(err)
    }
    console.log('listening on port 5000')
})


module.exports = app;