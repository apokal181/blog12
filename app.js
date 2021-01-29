const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('config')
const path = require('path')
const postRouter = require('./routes/post')
const authRouter = require('./routes/authRouter')

const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {

        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
app.use('/api/post', postRouter)
app.use('api/auth', authRouter)
app.use(express.static(clientPath))


app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})