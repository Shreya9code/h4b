import { useState } from 'react';

const Checkout = () => {
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
  });

  const cartItems = [
    { id: 1, name: 'Tomatoes', price: 30, quantity: 2 },
    { id: 2, name: 'Wheat', price: 50, quantity: 1 },
  ];

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send order to backend
    console.log('Order Placed:', { details, cartItems });
    alert('Order Placed Successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={details.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-green-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={details.phone}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            value={details.address}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={details.pincode}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>₹{getTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
