import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import orderRoutes from './routes/orderRoutes';
import { errorHandler } from './middleware/errorHandler';

config();

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/orders', orderRoutes);
app.use(errorHandler);
const startServer = async () => {
  try {
    await connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

startServer();

export default app;
