require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./src/config/db');
const path = require('path');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rate Limiting for Contact API
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Routes
app.use('/api/projects', require('./src/routes/projectRoutes'));
app.use('/api/contact', contactLimiter, require('./src/routes/contactRoutes'));
app.use('/api/auth', require('./src/routes/authRoutes'));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
