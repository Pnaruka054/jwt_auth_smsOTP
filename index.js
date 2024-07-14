require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRouter = require('./routes/user_route')
const authRouter = require('./routes/auth_route')
const cors = require('cors')
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())


async function modelCalled() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('database connected successfully')
}

modelCalled()

app.use('/api', userRouter)
app.use('/', authRouter)

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(PORT, () => {
    console.log('server started on port -' + PORT)
})