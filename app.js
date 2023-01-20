const express = require ("express")
const app = express()
const puerto = 3030
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/login", (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get("/register", (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));


app.listen(puerto,() => console.log("Servidor funcionando en http://localhost:" + puerto ))

