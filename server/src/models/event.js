import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    eventType: {
      type: String,
      enum: ["workshop", "seminar", "hackathon", "club", "placement", "other"],
      default: "other"
    },

    organizedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // club / faculty / placement coordinator
      required: true
    },

    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      default: null
    },

    date: {
      type: Date,
      required: true
    },

    venue: {
      type: String
    },

    mode: {
      type: String,
      enum: ["online", "offline", "hybrid"],
      default: "offline"
    },

    targetAudience: {
      type: [String], // ["1st year", "AI", "CSE"]
      default: []
    },

    registrationLink: {
      type: String
    },

    createdByRole: {
      type: String,
      enum: ["club", "faculty", "placement"],
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
