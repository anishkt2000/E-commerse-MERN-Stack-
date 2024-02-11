import mongoose from "mongoose";

// we can create object by using curly bracket. like name, email e.t.c are the object of userSchema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // to remove the white space
    },
    email: {
      type: String,
      required: true,
      unique: true, // unique is used because, with one email id, one user can login
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, //0 means false.
    },
  },
  { timestamps: true } // whenever new user will created, then  created time will get added there .
);

export default mongoose.model("users", userSchema); // here users is a folders inside a ecommerce in mongodb atlas.
// object of userSchema will get store in users folder which is inside the ecommerce folder of mongodb database
