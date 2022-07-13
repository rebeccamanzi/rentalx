import express from 'express';
import { categoriesRoutes } from './categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log('Server is running!'));
