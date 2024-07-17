const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    fault: {
      type: String,
      required: true,
    },
    photoImage: {
      type: String,
      required: true,
    },
    
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phones", phoneSchema);
