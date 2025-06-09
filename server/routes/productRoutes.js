import express from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);       // 🧑‍🌾 Farmer adds
router.delete("/:id", deleteProduct); // optional

export default router;
