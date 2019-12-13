import express from 'express';
import connectDB from './config/db';

const app = express();

connectDB();

// init middleware

// replaces body-parser in newer versions of express
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API running!');
});

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
