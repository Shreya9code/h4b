import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">KrishiMitra</h3>
            <p className="text-gray-400">
              Empowering farmers with AI-driven agricultural solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/disease-detection" className="text-gray-400 hover:text-white">Disease Detection</Link></li>
              <li><Link to="/weather-forecast" className="text-gray-400 hover:text-white">Weather Forecast</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/learning" className="text-gray-400 hover:text-white">Learning Center</Link></li>
              <li><Link to="/government-schemes" className="text-gray-400 hover:text-white">Government Schemes</Link></li>
              <li><Link to="/fertilizer-shops" className="text-gray-400 hover:text-white">Nearby Shops</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@krishimitra.com</p>
            <p className="text-gray-400">Helpline: +91 1800 123 4567</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} KrishiMitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}