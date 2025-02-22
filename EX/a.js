import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server is working');
});
app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});