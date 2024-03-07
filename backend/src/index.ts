import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'test hello!' });
});

app.listen(9000, () => {
  console.log('Server connected to localhost:9000');
});
