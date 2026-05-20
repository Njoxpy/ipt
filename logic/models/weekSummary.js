const mongoose = require("mongoose");

const weekSummarySchhema = new mongoose.Schema(
  {
    weekSummary: {
      type: String,
      required: [true, "Please enter week activity summary of what you did"],
      maxLength: [3000, "Maximum 3000 characters allowed"],
      minLength: [500, "Minimum 500 characters required"],
    },
    image: {
      type: String,
      required: [true, "Please enter week image"],
    },
    dateLogged: {
      type: Date,
      default: Date.now,
      required: [true, "Please enter date"],
    },
    studentName: {
      type: String,
      required: [true, "Please enter name"],
    },
    course: {
      type: String,
      required: [true, "Please enter course name"],
    },
    week: {
      type: String,
      enum: [
        "week 1",
        "week 2",
        "week 3",
        "week 4",
        "week 5",
        "week 6",
        "week 7",
        "week 8",
      ],
      required: [true, "Please enter valid week"],
    },
  },
  {
    timestamps: true,
  },
);

const WeekSummary = mongoose.model("WeekSummary", weekSummarySchhema);
module.exports = WeekSummary;

// marked? yes or true and by
