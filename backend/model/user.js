const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profileName:{
      type: String,
      default: "",
      unique: true
    },
    phone: {
      type: Number,
      default : 20,
      unique: true,

    },
    birthDate:{
      type: Date,
      default: Date.now
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

   role: {
  type: String,
  enum: ["user", "admin"],
  default: "user"
},

    profilePhoto: {
      type: String,
      default: "",
    },
  refreshToken: {
  type: String,
  default: ""
}  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);