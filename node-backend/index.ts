import express from 'express';
import cors from 'cors';
import {connectDB} from './conn/mogoClient';
const app = express();
const port = 3001;
const router = require('./routes/index.ts');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
