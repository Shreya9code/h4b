import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {product.organic ? 'Organic' : 'Regular'}
          </span>
        </div>
        
        <p className="text-gray-600 mt-1">{product.farmer}</p>
        <p className="text-gray-500 text-sm">{product.location}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="font-bold text-green-700">
            ₹{product.price}/{product.unit}
          </span>
          <Link 
            to={`/marketplace/product/${product.id}`}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}