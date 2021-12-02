const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
