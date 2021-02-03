const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('config')
const path = require('path')
const postRouter = require('./routes/post')
const authRouter = require('./routes/authRouter')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5003
const clientPath = path.join(__dirname, 'client')

async function start() {
    try{
        console.log(config.get('mongoURI'))
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true
        })

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}



start()

// create application/json parser
const jsonParser = bodyParser.json()
app.use('/api/post', postRouter)
app.use('/api/auth', jsonParser,  authRouter)
app.use(express.static(clientPath))


app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})