import mongoose from "mongoose";

const roadmapStepSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    resources: [
      {
        label: String,
        url: String,
        resourceType: {
          type: String,
          enum: ["video", "article", "course", "documentation", "other"],
          default: "other"
        }
      }
    ],

    order: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const roadmapSchema = new mongoose.Schema(
  {
    domain: {
      type: String, // "Web Development", "AI", etc.
      required: true,
      unique: true
    },

    description: {
      type: String
    },

    steps: [roadmapStepSchema],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" // faculty / alumni / verified seniors
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);
