import Order from "../models/Order.js";
import Product from "../models/Product.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { userId, items, shippingAddress, paymentMethod } = req.body;

    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    // Calculate total amount and validate product existence
    let totalAmount = 0;
    const detailedItems = [];
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res
          .status(404)
          .json({ error: `Product not found: ${item.product}` });
      }
      
      totalAmount += product.price * item.quantity;
      detailedItems.push({
        product: product._id,
        quantity: product.quantity,
        priceAtPurchase: product.price,
        unit: item.unit || "kg", // default if not provided
      });
    }

    const newOrder = new Order({
      userId,
      items:detailedItems,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });
const savedOrder = await newOrder.save();
console.log("✅ Order created:", savedOrder);
res.status(201).json(savedOrder);

  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all orders (admin or user dashboard)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.product");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get orders by user
export const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate("items.product");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
