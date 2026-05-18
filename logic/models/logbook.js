const mongoose = require("mongoose")
const logbookSchema = new mongoose.Schema({
  dayOfTheWeek: {
    enum: ["Monday", "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday"],
    required: [true, "Please enter date"]
  }
})