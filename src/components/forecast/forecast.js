import "./forecast.css";

const Week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const day = new Date().getDay();
  const forecastDays = Week.slice(day, Week.length).concat(Week.slice(0, day));
  // console.log(forecastDays);
  return (
    <div className="parent-container">
      <label className="heading">Daily</label>

      <div className="main-container">
        {data.list.splice(0,7).map((item, ind) => (
          <div className="weather-desc" key={ind}>
            <div className="title">{forecastDays[ind].substring(0,3)} {item.dt_txt.substring(8, 10)}</div>
            <img
              src={`icons/${item.weather[0].icon}.png`}
              alt="weather-img"
              className="forecast-icon"
            />
            <div className="min-max-temp">
              <span className="max-temp">{Math.round(item.main.temp_max)}°C</span>
              <span className="min-temp">{Math.round(item.main.temp_min)}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// const Forecast = ({ data }) => {
//   const today = new Date().getDay();
//   let days = 0;
//   return (
//     <div className="parent-container">
//       <label className="heading">Daily</label>

//       <div className="main-container">
//         {data.list.map((item, ind) => {
//           const itemDay = new Date(item.dt_txt).getDay();
//           if (itemDay === today) {
//             days = 0;
//           }
//           if (days < 7) {
//             days++;
//             return (
//               <div className="weather-desc" key={ind}>
//                 <div className="title">
//                   {Week[itemDay].substring(0,3)} {item.dt_txt.substring(8, 10)}
//                 </div>
//                 <img
//                   src={`icons/${item.weather[0].icon}.png`}
//                   alt="weather-img"
//                   className="forecast-icon"
//                 />
//                 <div className="min-max-temp">
//                   <span className="max-temp">
//                     {Math.round(item.main.temp_max)}°C
//                   </span>
//                   <span className="min-temp">
//                     {Math.round(item.main.temp_min)}°C
//                   </span>
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

export default Forecast;
