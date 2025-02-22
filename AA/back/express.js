import express from 'express'
import cors from 'cors';
const app = express()
// Middleware to parse JSON requests
const jokes = [
  { id: 1, title: "joke 1", content: "This is joke 1" },
  { id: 2, title: "joke 2", content: "This is joke 2" },
  { id: 3, title: "joke 3", content: "This is joke 3" },
  { id: 4, title: "joke 4", content: "This is joke 4" },
  { id: 5, title: "joke 5", content: "This is joke 5" },
];
app.use(cors());
app.get('/api/jokes', (req, res) => {
  res.send(jokes);
})
app.listen(3001, () => {
  console.log("Server is Running at " + 3001);
});