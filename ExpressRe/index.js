import express from 'express';
import dbcon from './dbcon.js';

import dbcon2 from './dbcon2.js';
import cors from 'cors';
const app = express()
const port = 3000;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
const data = [{
  id: 1,
  name: 'John',
  email: 'john@example.com'
}, {
  id: 2,
  name: 'John2',
  email: 'john2@example.com'
}]

app.get('/con', (req, res) => {
  res.send('Hello World! ji')
  dbcon();
})

app.get('/data', (req, res) => {
  dbcon2();
  res.send("data Inserted successfully");

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/data', (req, res) => {
  console.log("Hi insight data endpoint")
  // res.send(`<h2 style="background-color:red">${JSON.stringify(data)}</h2>`);
  console.log(req.body);

  res.send({ data: "Data Received" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


