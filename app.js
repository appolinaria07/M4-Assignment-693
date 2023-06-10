
import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

// MIDDLEWARE; has to be set up before the routes

// specifically set public folder to static folder
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// LOAD ROUTES INTO OUR MAIN FILE
// app.use('/api/v1/employees', routes)
app.use('/', routes)


const PORT = process.env.PORT || 3000

// because we use async, we can use try/catch block
const init = async () => {
    try {
        // because we use async, we need to use await
        // this is more effecient in long term configuration bcs we can add muliple connections
        await connectDB(process.env.DB)
        console.log('Connected to the database...')

        app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))

    } catch (err) {
        console.log(err)
    }
}

// Because we use a function, we need to initialize it
init()