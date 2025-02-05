const express = require('express');
const giftRoutes = require('./routes/giftRoutes'); // Task 1: Import giftRoutes

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Task 2: Add the giftRoutes to the server for handling requests to /api/gifts
app.use('/api/gifts', giftRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the GiftLink API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
