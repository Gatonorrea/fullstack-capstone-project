const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db'); // Import the database connection function

// GET /api/gifts - Retrieve all gifts
router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('gifts');
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
  } catch (error) {
    console.error('Error fetching gifts:', error);
    res.status(500).json({ error: 'Failed to fetch gifts' });
  }
});

// GET /api/gifts/:id - Retrieve a specific gift by ID
router.get('/:id', async (req, res) => {
  try {
    // Task 1: Connect to MongoDB and store connection in `db` constant
    const db = await connectToDatabase();

    // Task 2: Use the collection() method to retrieve the `gifts` collection
    const collection = db.collection('gifts');

    // Extract the ID from the request parameters
    const id = req.params.id;

    // Task 3: Find a specific gift by ID using the collection.findOne method
    const gift = await collection.findOne({ _id: id });

    // Check if the gift exists
    if (!gift) {
      return res.status(404).json({ error: 'Gift not found' });
    }

    // Return the gift as a JSON response
    res.json(gift);
  } catch (error) {
    console.error('Error fetching gift by ID:', error);
    res.status(500).json({ error: 'Failed to fetch gift' });
  }
});

module.exports = router;
