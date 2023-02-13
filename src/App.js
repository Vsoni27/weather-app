import React from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_API_KEY } from "./api";
//import { defaultWeather, defaultForecast} from "./default";
import { useState } from "react";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (SearchData) => {
    const [lat, lon] = SearchData.value.split(" ");
    //console.log(SearchData);
    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const ForecastFetch = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, ForecastFetch])
      .then(async (Response) => {
        const WeatherResponse = await Response[0].json();
        const ForecastResponse = await Response[1].json();

        setCurrentWeather({ city: SearchData.label, ...WeatherResponse });
        setCurrentForecast({ city: SearchData.label, ...ForecastResponse });
      })
      .catch((err) => console.log(err));
  };

  // console.log(currentWeather);
  // console.log(currentForecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
  );
}

export default App;
