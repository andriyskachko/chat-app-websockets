import dotenv from 'dotenv';
import express, {Request, Response} from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
