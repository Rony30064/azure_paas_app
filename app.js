import express from 'express'
import cors from 'cors'


const app = express() 
app.use(cors())
app.use(json())

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${PORT}`)
})