import express from "express";
const app = express();
const port = 4000;


app.use(function (req, res, next) { next(); });
app.get("/", (req, res) => {
  res.send("Index Server Data send");
});

app.get("/aj", function (req, res) {
  res.send("AJ Server Data sending");
});



app.listen(port, () => {
  console.log("Index Server is Running");
});