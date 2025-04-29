import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();

// Initialize express app
const app = express();

// Enable CORS for your frontend domain (e.g., http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL if it's different
  methods: 'GET,POST',  // You can adjust the methods if needed (PUT, DELETE, etc.)
  credentials: true,    // This is required if you're using cookies or sessions
}));

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
