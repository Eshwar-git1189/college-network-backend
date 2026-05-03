const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    desc: {
      type: String,
      default: "",
    },

    imageLink: {
      type: String,
      default: "",
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    comments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
