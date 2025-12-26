import mongoose from "mongoose";

const mentorshipRequestSchema = new mongoose.Schema(
  {
    mentee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    domain: {
      type: String, // "Web Development", "AI", etc.
      required: true
    },

    message: {
      type: String,
      trim: true
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "closed"],
      default: "pending"
    },

    initiatedBy: {
      type: String,
      enum: ["mentee", "mentor"],
      default: "mentee"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("MentorshipRequest", mentorshipRequestSchema);
