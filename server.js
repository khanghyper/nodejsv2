import express from 'express';
import * as dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import {userRouter} from './src/routes/index.js';
import connection from './src/config/connectDB.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.use('/', userRouter);



app.listen(port, async () => {
  await connection();
  console.log(`Example app listening on http://localhost:${port}`);
})