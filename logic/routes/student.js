// create a entry
const express = require("express");
const {
  GetLogs,
  LogbookDocument,
  GetLog,
  DeleteLog,
} = require("../controllers/student");
const student = express.Router();

// read entry
student.get("/", GetLogs);

student.get("/:id", GetLog);

student.post("/", LogbookDocument);

student.delete("/:id", DeleteLog);

module.exports = student;
