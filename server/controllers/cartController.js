import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Get user's cart /api/cart/:userId
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId })
      .populate("items.product", "name price imageUrl")
      .exec();

    if (!cart) {
      return res.status(200).json({ userId, items: [] });
    }
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ error: "Product and quantity are required" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Server error" });
  }
};


// Update cart item quantity PUT /api/cart/update
export const updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.find(item => item.product.toString() === productId);
    if (!item) return res.status(404).json({ error: "Item not in cart" });

    item.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    console.error("Update cart error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Remove item from cart DELETE /api/cart/remove
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    console.error("Remove from cart error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// Clear cart DELETE /api/cart/clear/:userId
export const clearCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOneAndUpdate({ userId }, { items: [] }, { new: true });
    res.status(200).json(cart);
  } catch (err) {
    console.error("Clear cart error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
