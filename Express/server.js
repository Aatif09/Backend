import express from "express";

const app = express();
const port = 3000;

// when a client sends data in the body of a request 
// (e.g., when submitting a form or sending some data via a POST request).

app.use(express.json());

const users = [
  { id: 1, name: "AJ", email: "aj@example.com" },
  { id: 2, name: "AB", email: "ab@example.com" },
  { id: 3, name: "PT", email: "pt@example.com" },
  { id: 4, name: "AS", email: "as@example.com" },
  { id: 5, name: "AK", email: "ak@example.com" },
];

app.get("/", (req, res) => {
  res.send("Server Data send");
});
app.get("/users", (req, res) => {
  // Sends a response of any type (string, object, array, buffer, etc.).
  res.send(users);
  //Specifically designed to send JSON responses.
  // res.json(users);
  // res.send(`<h2 style="color:red">${JSON.stringify(users)}</h2>`);
  // res.send('<h2 style="color:red">' + JSON.stringify(users) + '</h2>');

});


app.post("/add", (req, res) => {
  const newUser = req.body;
  console.log("Data Received", newUser);
  users.push(newUser);
  res.status(200).json({
    data: newUser,
  });
});

app.post("/submit", (req, res) => {
  const receivedData = req.body;

  console.log("Server received:", receivedData);

  res.status(200).json({
    message: "Data received successfully!",
    data: receivedData,
  });
});

app.listen(port, () => {
  console.log("Server is Running");
});