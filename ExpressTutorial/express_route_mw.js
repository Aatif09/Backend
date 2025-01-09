import express from 'express';
const app = express();
const port = 3004;
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
route.use(m1);// Global Middleware for a Router
route.get('/about', (req, res) => {
  res.send("Welcome to About Page");
});

route.get('/contact', m1, (req, res) => {
  res.send("Welcome to Contact Page");
});
app.use('/', route);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("PORT from .env:", process.env.PORT);
});