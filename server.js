// setup express nodejs server
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded());

app.listen(port, () => console.log('Server listening on port ' + port));