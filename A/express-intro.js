// const express = require('express');
import express from 'express';
const users = [{
  id: 1,
  name: 'AJ',
  age: 89
}]
const app = express();
app.use(express.json());
app.get('/api/users', (req, res) => {
  res.send(users);
})

app.post('/api/users', (req, res) => {
  const { name, age } = req.body;
  const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ id: newid, name, age });
  res.status(201).send("User created Successfully");
})
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => {
    return user.id == id
  })
  res.send(user);
})
app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const userIndex = users.findIndex((user) => {
    return user.id == id
  })
  users[userIndex].name = name;
  res.send("user's partial update created Successfully");
})

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => {
    return user.id == id
  })
  users.splice(userIndex, 1);
  res.send("user deleted Successfully");
})











app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
})
app.get('/api', (req, res) => {
  try {
    const data = req.query;
    if (!data.sname) {
      res.send("Name is missing");
    }
    else {
      res.send(`Hello ${data.sname}, You Rollno is${data.rollno}`);
    }
  } catch (error) {
    console.log(error.message)
  }
})
app.get('/api/:name/:age', (req, res) => {
  const data = req.params;
  res.send(`Hello ${data.name}, You Rollno is ${data.age}`);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})