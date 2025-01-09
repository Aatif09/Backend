import express from 'express';

const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log('This runs before the route handler');
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World! This is the first server.');
});
app.get('/pro', (req, res) => {
  res.send('Hello from profile!.');
});
app.get('/pro/:username', (req, res) => {
  res.send(`Hello ${req.params.username} Profile!.`);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});