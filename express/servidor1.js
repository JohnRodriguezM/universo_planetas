const express = require("express");
const app = express();
 
app.get("/", function (req, res) {
  res.send("vas a ser el mejor programador del mundo, nunca dudes de ti y sigue aprendiendo");
})
 
app.listen(8989);