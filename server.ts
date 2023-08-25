import express from 'express'
import {Client} from 'pg'

import dotenv from 'dotenv'
import { sayHello, getAllUser } from './src/controller/api'

dotenv.config()

const app = express()
const port = process.env.PORT

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
};
  
async function connectToDatabase() {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    console.log('Connected to the database');

    // Perform database operations here

  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await client.end();
    console.log('Disconnected from the database');
  }
}

app.get('/', sayHello)
app.get('/user', getAllUser)

connectToDatabase()

app.listen(port, () => { console.log(`listening to port ${port}`) })