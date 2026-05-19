const mongoose = require("mongoose");

const logbookSchema = new mongoose.Schema(
  {
    dayOfTheWeek: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      required: [true, "Please enter day"],
    },
    // name of student from request body and name of industry
    studentName: {
      type: String,
      required: [true, "Please enter name"],
    },
    course: {
      type: String,
      required: [true, "Please enter course name"],
    },
    dateLogged: {
      type: Date,
      default: Date.now,
      required: [true, "Please enter date"],
    },
    activities: {
      type: String,
      required: [true, "Please enter activity sumamry of what you did"],
      maxLength: [3000, "Enter maximum of not less than 3000 words"],
      minLength: [300, "Enter maximum of not less than 3000 words"],
    },
  },
  {
    timestamps: true,
  },
);

const Logbook = mongoose.model("logs", logbookSchema);

module.exports = Logbook;
