import express from 'express';
import { connectDB } from './config/db.js';
import {userRoutes} from './routes/userRoutes.js'
import authRoutes from './routes/auth.Routes.js';
import cors from 'cors'

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/',(req,res)=>{
  res.send('API is running')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to DB
connectDB();
