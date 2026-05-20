const express = require("express");
const connectDB = require("./config/DB");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

const logbookRoutes = require("./routes/student");
const weeksummaryroutes = require("./routes/weekSummary");

app.get("/", (req, res) => {
  res.status(200).json({ message: "IPT Logbook" });
});

// register routes
app.use("/api/v1/logbooks", logbookRoutes);
app.use("/api/v1/weeksummary", weeksummaryroutes);

app.use("/", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening at: http://localhost:${PORT}`);
});
