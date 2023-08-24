import express from 'express'
import dotenv from 'dotenv'
import { sayHello } from './src/controller/api'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', sayHello)

app.listen(port, () => { console.log(`listening to port ${port}`) })