import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import studentsRoutes from './routes/studentsRoute.js';
import teachersRoutes from './routes/teachersRoute.js';
import coursesRoutes from './routes/coursesRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/courses', coursesRoutes)

try{
    app.listen(PORT, () => {
        console.log('Server is running on port', PORT);
    });
}catch(error){
    console.error('Error starting the server:', error);
}