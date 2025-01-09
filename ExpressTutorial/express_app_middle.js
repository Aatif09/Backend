import express from 'express';
const app = express();
const port = 3003;
const m1 = (req, res, next) => {
  if (req.query.age >= 18) {
    next();
    // res.end();
  }
  else if (req.query.age < 18) {
    res.send("You are not authorized");
  }
  else {
    res.send("Pass the age of user");
  }
  app.use(m1);
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.post('/', (req, res) => {
    res.json({ name: "Aatif Jamshed" });
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
