const { Schema } = require("mongoose");

const listSchema = new Schema({
  userId: {type: String, required: true},
  shop: {type: String, required: true},
  products: {type: String, required: true},
  shoppingDate: {type: Date, required: false},
  createdAt: {type: Date, default: Date.now}
})

export const List = mongoose.model('List', listSchema);