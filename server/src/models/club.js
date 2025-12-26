import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    domain: {
      type: [String], // ["Web", "AI", "Robotics"]
      default: []
    },

    logo: {
      type: String // URL (Cloudinary later)
    },

    leads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // club heads / coordinators
      }
    ],

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],

    facultyAdvisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },

    contactEmail: {
      type: String
    },

    socialLinks: {
      linkedin: String,
      instagram: String,
      website: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Club", clubSchema);
