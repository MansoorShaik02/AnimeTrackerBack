const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');



const app = express();

// Connect to database
connectDB();
app.use(cors({
    origin: ["anime-tracker-back.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
// Middleware

app.use(express.json());
//haha
// Routes

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
