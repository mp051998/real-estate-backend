import express, { Request, Response } from 'express';

import { Db } from 'mongodb';
import { RealEstatePropertiesRoute } from './routes/realEstateProperties';
import { connectToDB } from './database/mongodb';
import dotenv from 'dotenv';

// Load the environment variables
dotenv.config();

const app = express();
const port = 3090;

let db: Db;
(async () => {
  db = await connectToDB(process.env.MONGODB_CONNECTION_URI, process.env.MONGODB_DATABASE_NAME);
})();
export { db };

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const realEstatePropertiesRoute = new RealEstatePropertiesRoute(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
