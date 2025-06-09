import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// Create a new order
router.post("/", createOrder);

// Get all orders 
router.get("/", getAllOrders);

// Get orders for a specific user
router.get("/user/:userId", getOrdersByUser);

// Update order status 
router.put("/:orderId/status", updateOrderStatus);

export default router;
