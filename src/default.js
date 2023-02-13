import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "./api";
export const defaultWeather = fetch(
  `${OPEN_WEATHER_API_URL}/weather?lat=28.6139391&lon=77.2090212&appid=${OPEN_WEATHER_API_KEY}&units=metric`
);

export const defaultForecast = fetch(
    `${OPEN_WEATHER_API_URL}/forecast?lat=28.6139391&lon=77.2090212&appid=${OPEN_WEATHER_API_KEY}&units=metric`
)

console.log(defaultWeather);