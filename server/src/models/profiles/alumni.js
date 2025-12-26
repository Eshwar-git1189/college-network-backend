const mongoose = require("mongoose");

const alumniProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    company: {
      type: String,
    },

    jobTitle: {
      type: String,
    },

    experienceYears: {
      type: Number,
    },

    linkedinUrl: {
      type: String,
    },

    willingToMentor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlumniProfile", alumniProfileSchema);
