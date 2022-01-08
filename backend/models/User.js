const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    profilePicture: {
      type: String,
      default:
        "https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg",
    },
    coverPicture: {
      type: String,
      default:
        "https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    desc: { type: String, max: 50, default: "" },
    city: { type: String, max: 50, default: "" },
    from: { type: String, max: 50, default: "" },
    relationShip: { type: String, default: "Single" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
