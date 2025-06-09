import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - replace with actual API call in real implementation
  useEffect(() => {
    const mockProduct = {
      id: id,
      name: 'Organic Tomatoes',
      price: 45,
      unit: 'kg',
      farmer: 'Rajesh Farms',
      location: 'Punjab',
      rating: 4.5,
      reviews: 28,
      description: 'Freshly harvested organic tomatoes grown without chemical pesticides. Perfect for salads, sauces, and daily cooking.',
      images: [
        '/images/tomatoes-1.jpg',
        '/images/tomatoes-2.jpg',
        '/images/tomatoes-3.jpg'
      ],
      category: 'Vegetables',
      available: 15,
      organic: true,
      harvestDate: '2023-06-15',
      deliveryOptions: ['Standard (3-5 days)', 'Express (1-2 days)']
    };

    const mockRelated = [
      {
        id: 2,
        name: 'Organic Potatoes',
        price: 30,
        unit: 'kg',
        farmer: 'Rajesh Farms',
        image: '/images/potatoes.jpg'
      },
      {
        id: 3,
        name: 'Fresh Carrots',
        price: 35,
        unit: 'kg',
        farmer: 'Singh Farms',
        image: '/images/carrots.jpg'
      }
    ];

    setProduct(mockProduct);
    setRelatedProducts(mockRelated);
  }, [id]);

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 border rounded-md overflow-hidden ${selectedImage === index ? 'border-green-500' : 'border-gray-200'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <span className={`px-2 py-1 text-xs rounded-full ${product.organic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {product.organic ? 'Organic' : 'Conventional'}
              </span>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="mt-4">
              <span className="text-3xl font-bold text-green-700">₹{product.price}</span>
              <span className="text-gray-500"> / {product.unit}</span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{product.farmer}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{product.location}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700">Harvest Date: {product.harvestDate}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700">Available: {product.available} {product.unit}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center text-xl"
                >
                  -
                </button>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(prev => Math.min(product.available, prev + 1))}
                  className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center text-xl"
                >
                  +
                </button>
                <span className="ml-4 text-gray-600">Max: {product.available} {product.unit}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Delivery Options</h3>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                {product.deliveryOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 flex items-center justify-center">
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 bg-yellow-500 text-white py-3 px-4 rounded-md hover:bg-yellow-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/marketplace/product/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 mt-1">{item.farmer}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-bold text-green-700">
                      ₹{item.price}/{item.unit}
                    </span>
                    <span className="text-blue-600 font-medium">View</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}