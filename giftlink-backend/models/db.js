const { MongoClient } = require('mongodb');

// MongoDB connection URI and database name
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const dbName = 'giftDB'; // Replace with your database name

// Function to connect to MongoDB and return the database instance
async function connectToDatabase() {
  // Create a new MongoClient instance
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Task 1: Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB successfully');

    // Task 2: Connect to the database `giftDB` and store in variable `dbInstance`
    const dbInstance = client.db(dbName);

    // Task 3: Return the database instance
    return dbInstance;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Propagate the error to the caller
  }
}

// Export the function for use in other modules
module.exports = connectToDatabase;
