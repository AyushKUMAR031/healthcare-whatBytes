require('dotenv').config();
const express = require('express');
const { connectDB } = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
