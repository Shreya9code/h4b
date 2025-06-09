import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
export default function Navbar() {
  const { language, setLanguage, user } = useAppContext();
  
  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              KrishiMitra
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/disease-detection" className="px-3 py-2 hover:bg-green-600 rounded">
              Disease Detection
            </Link>
            <Link to="/weather-forecast" className="px-3 py-2 hover:bg-green-600 rounded">
              Weather
            </Link>
            <Link to="/community" className="px-3 py-2 hover:bg-green-600 rounded">
              Community
            </Link>
            <Link to="/learning" className="px-3 py-2 hover:bg-green-600 rounded">
              Learning
            </Link>
            
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ml-4 bg-green-800 text-white px-2 py-1 rounded border-none"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
            // In your Navbar.jsx
<button 
  onClick={() => setIsCartOpen(true)}
  className="relative p-2 text-gray-700 hover:text-green-600"
>
  <ShoppingCartIcon className="w-6 h-6" />
  {/*cartItems.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartItems.length}
    </span>
  )*/}
</button>
            {user ? (
              <div className="ml-4">
                <span>Hi, {user.name}</span>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="ml-4 bg-white text-green-700 px-4 py-2 rounded font-medium hover:bg-gray-100"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}