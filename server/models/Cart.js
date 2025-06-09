import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 
  }
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk user ID
  items: [cartItemSchema]
}, { timestamps: true }); // adds createdAt & updatedAt

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
