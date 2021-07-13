import express from "express";
import { join } from "path";
import socketIO from "socket.io";

const PORT = 8080;
const app = express();

// View Engine
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// Static Files
app.use(express.static(join(__dirname, "static")));

// Route
app.get("/", (req, res) => res.render("home"));

// Listen at Port
app.listen(PORT, () =>
  console.log(`💹 Server is up: http://localhost:${PORT}`)
);
