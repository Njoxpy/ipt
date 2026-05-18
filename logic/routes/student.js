// create a entry
const express = require("express")
const student = express.Router()

// read entry
student.get("/", (req, res) => {
  res.status(200).json({message: "submission sucessfully"})
})

student.get("/:id", (req, res) => {
  res.status(200).json({message: "submission sucessfully"})
})


// submit
student.post("/", (req, res) => {
  res.status(201).json({message: "submission sucessfully"})
})

// update
student.put("/", (req, res) => {
  res.status(201).json({message: "submission sucessfully"})
})

// delete
student.delete("/", (req, res) => {
  res.status(201).json({message: "submission sucessfully"})
})

module.exports =  student;