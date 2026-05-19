const mongoose = require("mongoose");
const Logbook = require("../models/logbook");

const LogbookDocument = async (req, res) => {
  try {
    const { dayOfTheWeek, studentName, course, activities } = req.body;

    if (!dayOfTheWeek) {
      return res.status(400).json({ message: "dayOfTheWeek is required" });
    }

    if (!studentName) {
      return res.status(400).json({ message: "Enter student name" });
    }

    if (!course) {
      return res.status(400).json({ message: "Enter course" });
    }

    if (!activities) {
      return res.status(400).json({ message: "Enter actvity sumamry for log" });
    }

    if (activities.length < 300 && activities.length > 3000) {
      return res.status({
        message:
          "Activities should not excedd 3000 words and not less than 300 words",
      });
    }

    // verify is the student exist into a database or from request body

    const validDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (!validDays.includes(dayOfTheWeek)) {
      return res.status(400).json({ message: "Invalid day!" });
    }

    const log = await Logbook.create({
      dayOfTheWeek,
      studentName,
      course,
      activities,
    });

    res.status(201).json({ message: log });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const GetLogs = async (req, res) => {
  try {
    const logs = await Logbook.find().sort({ createdAt: -1 });

    if (logs.length === 0) {
      return res.status(404).json({ message: "No logs found" });
    }

    res.status(200).json({ message: logs });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const GetLog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Enter valid log" });
    }

    const log = await Logbook.findById(id);

    if (!log) {
      return res.status(404).json({ message: "Log not found!" });
    }

    res.status(200).json({ message: log });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const DeleteLog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Enter valid log" });
    }

    const log = await Logbook.findByIdAndDelete(id);

    if (!log) {
      return res.status(404).json({ message: "Log not found!" });
    }

    res.status(200).json({ message: "log deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  LogbookDocument,
  GetLogs,
  GetLog,
  DeleteLog,
};
