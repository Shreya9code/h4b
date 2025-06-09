import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  unit: {
    type: String,
    enum: [
      "kg",
      "g",
      "quintal",
      "ton",
      "litre",
      "ml",
      "pcs",
      "dozen",
      "bunch",
      "packet",
      "bundle",
    ],
    default: "kg",
  },
  priceAtPurchase: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk user ID
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
