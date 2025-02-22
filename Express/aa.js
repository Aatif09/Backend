import express from 'express';
const app = express();
const port = 3000;


app.use((req, res, next) => {
  console.log('This runs before the route handler');
  next();
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to our home page!' });
});
// app.get('/', (req, res) => {
//   res.send('Hello World! This is the first server.');
// });
app.get('/profile', (req, res) => {
  const age = req.query.age;
  const city = req.query.city;
  res.send('Hello profile!. of ' + age + city);
});
app.get('/pro', (req, res) => {
  res.send('Hello profile!.');
});
app.get('/gett/:username', (req, res) => {
  res.send(`Hello ${req.params.username} Profile!.`);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});