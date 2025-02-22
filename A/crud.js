// const express = require('express');
import express from 'express';
const users = [{
  id: 1,
  name: 'AJ',
  age: 80
}]
const app = express();
app.use(express.json());
app.get('/users', (req, res) => {
  res.send(users);
})
app.post('/new', (req, res) => {
  const { name } = req.body;
  res.send(`Done for the day ${name}`);
})
app.post('/users', (req, res) => {
  const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const { name, age } = req.body;
  users.push({ id: newid, name, age });
  res.send("users created successfully");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})