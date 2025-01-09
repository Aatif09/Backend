// npm install ejs
// configure ejs
import express from 'express';
const app = express();
const port = 3002;
app.use((req, res, next) => {
  console.log('This runs before the route handler');
  next();
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'AJ Home Page', message: 'Welcome to our home page!' });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});