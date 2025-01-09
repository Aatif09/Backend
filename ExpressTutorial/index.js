import dotenv from "dotenv";
import express from 'express';
const app = express();
dotenv.config();
const port = 3000;
app.use(express.json());// built in middle ware
const route = express.Router();

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
}
// app.use(m1);// application level middle ware
route.use(m1)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/', (req, res) => {
  res.json({ name: "Aatif Jamshed" });
});
// built in middle ware
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(data);
});
route.get('/about', (req, res) => {
  res.send("Welcome to About Page");
});

route.get('/contact', (req, res) => {
  res.send("Welcome to contact Page");
});
// Route Level
// app.post('/', m1, (req, res) => {
//   res.json({ name: "Aatif Jamshed" });
// });
app.use('/', route);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("PORT from .env:", process.env.PORT);
});

