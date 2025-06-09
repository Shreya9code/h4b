import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

function WeatherForecastPage() {
  const [forecast, setForecast] = useState(null);
  const { location } = useAppContext();

  useEffect(() => {
    if (location) {
      // Fetch weather data based on location
      // Example API call:
      // fetchWeatherData(location.lat, location.lng).then(setForecast);
    }
  }, [location]);

  return (
    <div>
      <h2>Weekly Weather Forecast</h2>
      {forecast ? (
        <div className="forecast-container">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-day">
              <h3>{day.date}</h3>
              <p>Temperature: {day.temp}°C</p>
              <p>Conditions: {day.conditions}</p>
              <p>Recommendation: {day.advice}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
}

export default WeatherForecastPage;