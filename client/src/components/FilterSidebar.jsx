import { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    crop: '',
  });

  const handleChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Call parent handler
  };

  return (
    <aside className="w-full md:w-64 bg-white shadow-md rounded-lg p-4 space-y-6">
      <h3 className="text-xl font-bold text-green-700 mb-4">Filter Options</h3>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All</option>
          <option value="fertilizer">Fertilizer</option>
          <option value="seed">Seed</option>
          <option value="tool">Tools</option>
          <option value="course">Course</option>
        </select>
      </div>

      {/* Crop Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
        <select
          name="crop"
          value={filters.crop}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All</option>
          <option value="rice">Rice</option>
          <option value="wheat">Wheat</option>
          <option value="tomato">Tomato</option>
          <option value="potato">Potato</option>
        </select>
      </div>

      {/* Location Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Enter district or state"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
    </aside>
  );
};

export default FilterSidebar;
