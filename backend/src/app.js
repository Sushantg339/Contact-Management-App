import express from 'express'
import contactRoutes from './routes/contact.routes.js'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(express.json())
app.use(cors(
    {origin : 'http://localhost:5173' , withCredentials : false}
))

app.use(express.static(path.join(path.resolve() , 'public')))

app.use('/api/contact',contactRoutes)

export default app