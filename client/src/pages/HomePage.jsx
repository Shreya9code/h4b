import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  const { setLocation, language } = useAppContext();

  useEffect(() => {
    // Get user's location if allowed
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    }
  }, [setLocation]);

  const features = [
    {
      icon: "🌱",
      title: "Disease Analysis",
      description:
        "Accurate detection of crop diseases to help farmers act quickly",
    },
    {
      icon: "🌦",
      title: "Disease Forecasting",
      description:
        "Forecasts potential outbreaks based on weather and soil conditions",
    },
    {
      icon: "📶",
      title: "Offline Detection",
      description: "Enables disease detection without internet connectivity",
    },
    {
      icon: "🗺",
      title: "Disease Mapping",
      description: "Maps disease spread across regions for better monitoring",
    },
    {
      icon: "🌤",
      title: "Weather Forecast",
      description: "Weekly weather forecast with personalized farming advice",
    },
    {
      icon: "📩",
      title: "SMS Alerts",
      description:
        "Real-time alerts about disease outbreaks and farming updates",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-4 sm:px-6 lg:px-8"
      style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply" // This blends gradient with image
  }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Farmers with AI Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Get disease detection, weather forecasts, and farming advice in one
            place
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Detect Disease Now
            </button>
            <button className="bg-green-300 text-green-800 border-2 border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-green-600">10,000+</p>
              <p className="text-gray-600 mt-2">Farmers Helped</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-600">95%</p>
              <p className="text-gray-600 mt-2">Detection Accuracy</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-600">50+</p>
              <p className="text-gray-600 mt-2">Crop Diseases</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-600">12</p>
              <p className="text-gray-600 mt-2">Regional Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
        Our Solutions
      </span>
      <h2 className="text-3xl font-bold text-gray-800">
        Key Features for Modern Farming
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Innovative tools designed to empower farmers with technology-driven solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 group"
        >
          <div className="p-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-50 text-green-600 text-2xl mb-4 group-hover:bg-green-100 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {feature.description}
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm hover:shadow-md">
        Explore All Features
      </button>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Farmers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This app saved my entire tomato crop from blight with early detection!",
                name: "Rajesh Kumar",
                location: "Punjab",
              },
              {
                quote:
                  "The weather alerts help me plan irrigation perfectly. No more water waste!",
                name: "Priya Patel",
                location: "Gujarat",
              },
              {
                quote:
                  "Found the best fertilizer shop nearby through this platform. Very helpful!",
                name: "Anil Deshmukh",
                location: "Maharashtra",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-green-700">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of farmers already benefiting from our AI-powered
            agricultural platform
          </p>
          <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Farmers Portal</h3>
            <p className="text-gray-400">
              Empowering farmers with technology for better yields and
              sustainable practices.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Disease Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Weather Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Farming Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Research Papers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">support@farmersportal.com</p>
            <p className="text-gray-400">+91 9876543210</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
