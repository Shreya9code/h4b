import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');
  const [location, setLocation] = useState(null);
  const [cropType, setCropType] = useState(null);
  const [offlineMode, setOfflineMode] = useState(false);
  
  // Check for service worker support for offline capabilities
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered');
        })
        .catch(err => {
          console.log('Service Worker registration failed: ', err);
        });
    }
  }, []);

  // Check connection status
  useEffect(() => {
    const handleConnectionChange = () => {
      setOfflineMode(!navigator.onLine);
    };
    
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
    
    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, []);

  return (
    <AppContext.Provider value={{
      // User state
      user,
      setUser,
      
      // Language localization
      language,
      setLanguage,
      
      // Location services
      location,
      setLocation,
      
      // Agricultural context
      cropType,
      setCropType,
      
      // Offline capabilities
      offlineMode,
      setOfflineMode,
      
      // Other global functions
      translate: (key) => {
        // This would be connected to your localization system
        const translations = {
          en: {
            welcome: "Welcome",
            // other translations...
          },
          hi: {
            welcome: "स्वागत हे",
            // other translations...
          }
        };
        return translations[language][key] || key;
      }
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}