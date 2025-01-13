import express from 'express';
const app = express();
const port = 3005;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// built in middle ware
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});