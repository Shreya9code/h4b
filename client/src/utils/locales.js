export const translations = {
  en: {
    welcome: "Welcome to Farmers Portal",
    diseaseDetection: "Disease Detection",
    // Add all English translations
  },
  hi: {
    welcome: "किसान पोर्टल में आपका स्वागत है",
    diseaseDetection: "रोग पहचान",
    // Add all Hindi translations
  },
  // Add other languages
};

export function getText(key, language = 'en') {
  return translations[language][key] || translations['en'][key] || key;
}