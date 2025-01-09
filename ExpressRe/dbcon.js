import mongoose from "mongoose";

// Define a schema for the "team" collection, specifying the collection name
const teamSchema = new mongoose.Schema({
  name: String,
  age: String
}, { collection: 'team' }); // Explicitly set collection name as "team"

// Create a model for the "team" collection
const Team = mongoose.model('Team', teamSchema);

function dbcon() {
  console.log("Database connection established");

  const url = "mongodb+srv://root:root@cluster0.9988m.mongodb.net/fsd?retryWrites=true&w=majority&appName=Cluster0";

  mongoose.connect(url)
    .then(async () => {
      console.log('Connected to MongoDB');

      try {
        // Fetch all documents from the "team" collection using the Team model
        const teamMembers = await Team.find(); // Fetch all team members
        console.log('Team Members:', teamMembers); // Log the retrieved data
      } catch (err) {
        console.error('Error fetching team members:', err);
      }
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
    });
}

export default dbcon;
