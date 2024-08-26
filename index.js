const express = require("express");
const app = express();
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const expressServer = http.createServer(app);
const PORT = process.env.PORT;

// app.get("/", (req, res)=>{
//     res.status(200).json({message:"Welcome to home page"})
// });


app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/home", (req, res) => {
  res.render("home2", {});
});

app.get("/chat", (req, res) => {
  res.render("chat/index", {});
});

app.get("/chat2", (req, res) => {
  res.render("chat/chat2", {});
});

expressServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
