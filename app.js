import express from 'express'
import cors from 'cors'
import { sequelize } from './config/database.js';


const app = express() 
app.use(cors());
app.use(express.json());

import studentsRoutes from './routes/students.js';
app.use('/students', studentsRoutes);

const PORT = 3000
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
app.listen(PORT, () =>  console.log(`Servidor Corriendo en http://localhost:${PORT}`))
})
.catch(err => console.error('Errior al sincronizar con la base de datos:', err));