const mongoose = require("mongoose");
const { sizes } = require("../constants");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    mainImg: {
      type: String,
      required: true,
    },
    subImg: {
      type: String,
      required: true,
    },
  },
  sizes: [
    {
      name: {
        type: String,
        enum: sizes,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      sold: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
