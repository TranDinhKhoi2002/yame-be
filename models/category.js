const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  types: [
    {
      type: {
        type: String,
        required: true,
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      ],
    },
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
