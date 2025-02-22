// import express from 'express';
const express = require('express');
const app = express();
app.use(express.text());
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
const task1mw = (req, res, next) => {
  console.log('Task 1 middleware');
  next();
}
app.use(task1mw)
const task2mw = (req, res, next) => {
  console.log('Task 2 middleware');
  next();
}
app.use(task2mw)
const task3mw = (req, res, next) => {
  console.log('Task 3 middleware');
  next();
}
app.use(task3mw)
app.get('/', (req, res) => {
  console.log(req.body)
  res.send("<h1>Hello, world!</h1>");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});