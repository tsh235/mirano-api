import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { setupProductRoutes } from './productController.js';
import { setupOrderRoutes } from './orderController.js';
import { setupCartRoutes } from './cartController.js';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  // origin: 'http://localhost:5173', // Замените на URL вашего фронтенда
  origin: ['https://mirano-five.vercel.app', 'http://localhost:5173', 'https://mirano-render.onrender.com'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/img', express.static('img'));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

setupProductRoutes(app);
setupOrderRoutes(app);
setupCartRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
