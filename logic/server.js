const express = require("express");
const connectDB = require("./config/DB");

require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 5000;

const studentRoutes = require("./routes/student")

// register routes
app.route("/api/v1/students", studentRoutes)

app.get("/", (req, res) => {
  res.status(200).json({message: "IPT Logbook"})
})

app.use("/", (req, res) => {
  res.status(404).json({message: "Route not found"})
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening at: http://localhost:${PORT}`)
})