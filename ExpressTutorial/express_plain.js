import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/', (req, res) => {
  res.json({ name: "Aatif Jamshed", id: "2719" });
});
app.post('/post', (req, res) => {
  res.json([{ name: "Aatif Jamshed" }, { id: "2719" }]);
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});