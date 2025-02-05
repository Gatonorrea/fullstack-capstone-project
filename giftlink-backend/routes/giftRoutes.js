const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db'); // Import the database connection function

// GET /api/gifts - Retrieve all gifts
router.get('/', async (req, res) => {
  try {
    // Task 1: Connect to MongoDB and store connection in `db` constant
    const db = await connectToDatabase();

    // Task 2: Use the collection() method to retrieve the `gifts` collection
    const collection = db.collection('gifts');

    // Task 3: Fetch all gifts using the collection.find method and convert to a JSON array
    const gifts = await collection.find({}).toArray();

    // Task 4: Return the gifts using the res.json method
    res.json(gifts);
  } catch (error) {
    console.error('Error fetching gifts:', error);
    res.status(500).json({ error: 'Failed to fetch gifts' });
  }
});

module.exports = router;
