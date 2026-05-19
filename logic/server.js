const express = require("express");
const connectDB = require("./config/DB");

require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

const studentRoutes = require("./routes/student");

app.get("/", (req, res) => {
  res.status(200).json({ message: "IPT Logbook" });
});

// register routes
app.use("/api/v1/logbooks", studentRoutes);

app.use("/", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening at: http://localhost:${PORT}`);
});
