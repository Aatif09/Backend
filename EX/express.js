import express from 'express';
const users = [
  {
    id: 1, name: "AJ", age: 22,
  }
]
const app = express();
const port = 3000;
app.use(express.json())
app.get('/users', (req, res) => {
  res.send(users);
});
app.post('/users', (req, res) => {
  const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const { name, age } = req.body
  users.push({ id: newid, name, age });
  res.status(201).send("Successfully created");
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id == userId);
  console.log(userId)
  res.send(user);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.findIndex(user => user.id == userId);
  users.splice(user, 1);
  res.send("user deleted");
});

app.patch('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name } = req.body;
  const index = users.findIndex(user => user.id == userId);
  users[index].name = name;
  res.send("user updated successfully");
});


//http://localhost:3000/?name=aatif
app.get('/', (req, res) => {
  const query = req.query;
  console.log(query)
  res.send(`Hello,! ${query.name}`);
});

//http://localhost:3000/a/22
app.get('/a/:id', (req, res) => {
  const params = req.params.id;
  console.log(params)
  res.send('Hello, World!' + params);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});