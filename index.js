const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("md nikel ali");
});

const users = [
  { id: 1, name: "nikel", email: "nikel@ali.com" },
  { id: 2, name: "nikel", email: "nikel@ali.com" },
 

];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post('/users',(req,res)=>{
  const newusers=req.body;
  newusers.id=users.length+1;
  users.push(newusers);
  res.send(newusers

  )
})
app.listen(port, (req, res) => {
  console.log(`express app listening on ${port}`);
});
