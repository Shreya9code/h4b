import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

export default function Marketplace() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    location: '',
    organic: false
  });

  // Sample products data - replace with API call
  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 45,
      unit: 'kg',
      farmer: 'Rajesh Farms',
      location: 'Punjab',
      rating: 4.5,
      image: '/images/tomatoes.jpg'
    },
    // More products...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Farm Fresh Produce</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}