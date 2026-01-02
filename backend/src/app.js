import express from 'express'
import contactRoutes from './routes/contact.routes.js'
import path from 'path'

const app = express()

app.use(express.json())

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '../frontend/dist')))


app.use('/api/contact', contactRoutes)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'))
})

export default app