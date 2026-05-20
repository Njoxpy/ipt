const express = require("express");
const { default: mongoose } = require("mongoose");
const WeekSummary = require("../models/weekSummary");
const upload = require("../middleware/Upload");
const routes = express.Router();

// create
routes.post("/", upload.single("image"), async (req, res) => {
  try {
    // Check uploaded file
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    // Check image type
    if (
      req.file.mimetype !== "image/jpeg" &&
      req.file.mimetype !== "image/png"
    ) {
      return res.status(400).json({
        message: "Invalid image type!",
      });
    }

    const { weekSummary, studentName, course, week } = req.body;

    // Validate required fields
    if ((!weekSummary || !studentName || !course, !week)) {
      return res.status(400).json({
        message: "Fill all required fields",
      });
    }

    const validWeek = [
      "week 1",
      "week 2",
      "week 3",
      "week 4",
      "week 5",
      "week 6",
      "week 7",
      "week 8",
    ];

    if (!validWeek.includes(week)) {
      return res.status(400).json({ message: "Invalid week" });
    }

    // Save data
    const newSummary = await WeekSummary.create({
      weekSummary,
      image: req.file.path,
      studentName,
      course,
      week,
    });

    return res.status(201).json({
      message: "Summary uploaded successfully",
      data: newSummary,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// read
routes.get("/", async (req, res) => {
  try {
    const summary = await WeekSummary.find().sort({ createdAt: -1 });

    if (summary.length === 0) {
      return res.status(204).json({ message: "No summary found" });
    }

    res.status(200).json({ message: summary });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// check summary based on studentName, course,week
routes.get("/check", async (req, res) => {
  try {
    const query = req.query;

    console.log(query);

    const results = await WeekSummary.find(query);

    res.status(200).json({
      message: results,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const summary = await WeekSummary.findById(id);

    if (!summary) {
      return res.status(200).json({ message: "Not found" });
    }

    res.status(200).json({ message: summary });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// update
routes.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const summary = await WeekSummary.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!summary) {
      return res.status(500).json({ message: "Sumary not found" });
    }

    res.status(200).json({ message: "Updated sucessfully" });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ message: "Internal server error" });
  }
});

// delete
routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const summary = await WeekSummary.findByIdAndDelete(id);

    if (!summary) {
      return res.status(500).json({ message: "Sumary not found" });
    }

    res.status(200).json({ message: "Deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = routes;
