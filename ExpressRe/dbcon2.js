import { MongoClient } from 'mongodb';

// Connection URL and database name
const url = "mongodb+srv://root:root@cluster0.9988m.mongodb.net/fsd?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'fsd';

async function dbcon2() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection('team');  // Assuming you want to insert into "team" collection

    // Insert a document into the "team" collection
    const result = await collection.insertOne({ name: 'John Doe', age: '30' });
    console.log('Inserted document:', result);

    // Fetch the data to verify insertion
    const teamMembers = await collection.find().toArray();
    console.log('Team members:', teamMembers);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}




export default dbcon2;