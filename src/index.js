import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connection } from './configs/mongodb';
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router)

const port = process.env.PORT || 2811;
// connection();
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))