const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const connectDB = require("./config/db");
const files = require("./routes/files");
const show = require("./routes/show");
const download = require("./routes/download.js");
const PORT = process.env.PORT || 3000;

// App Use
app.use(express.json());
app.use(express.static("public"));

// Connect MongoDB
connectDB();

// Template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", files);
app.use("/files", show);
app.use("/files/download", download);

app.listen(PORT, () => {
  console.log("Server Connected http://localhost:3000/");
});
