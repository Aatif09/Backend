import express from 'express'
const app = express();
const PORT = 3005;
app.use(express.json());
app.get("/", (req, res) => {
  res.send('Home Page crud');
})
app.get("/user/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});
//http://localhost:3005/user/Aatif

app.post("/useparam/:name", (req, res) => {
  console.log(req.params.name);
  res.send(`user name get succssfully: ${req.params.name}`);
})
//http://localhost:3005/useparam/:name=aatif

app.get("/search", (req, res) => {
  const branch = req.query.branch;
  res.send(`Searching for the ${branch} branch.`);
});
// http://localhost:3005/search?branch=IT

app.post("/useQuery", (req, res) => {
  console.log(req.query.branch);
  res.send(`Server Response: ${req.query.branch}`);
})
// http://localhost:3005/useQuery?branch=CSE


app.post("/user", (req, res) => {
  console.log("hello" + req.body.id);
  const id = req.body.id;
  res.send(`${id} user Page`);
})
// { "id": 123 }

app.get("/get-ip", (req, res) => {
  const userIp = req.ip;
  res.send(`Your IP address is: ${userIp}`);
});

app.post("/add", (req, res) => {
  res.send('user added successfully');
})
app.put("/edit", (req, res) => {
  res.send('user Edited successfully');
})
app.delete("/del", (req, res) => {
  res.send('user Deleted successfully');
})
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})