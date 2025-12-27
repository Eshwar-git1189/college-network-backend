const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["announcement", "event", "club", "department", "other"],
      default: "announcement",
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    relatedId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    targetAudience: {
      type: [String],
      default: [],
    },

    attachments: [
      {
        url: String,
        mimeType: String,
        filename: String,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feed", feedSchema);
