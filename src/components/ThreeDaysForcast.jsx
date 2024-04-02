import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import useFetch from "../fetch/useFetch";

const ThreeDaysForcast = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;
  if (loading) return <p> Loading...</p>;
  if (error) return <p> {error.message}</p>;
  // first day

  // const daysBc1 = results.forecast.forecastday[0].day.condition.text;
  let dayDate1 = results.forecast.forecastday[0].date;
  let dayIcon1 = results.forecast.forecastday[0].day.condition.icon;
  let dayText1 = results.forecast.forecastday[0].day.condition.text;
  let dayMaxtemp1 = Math.floor(results.forecast.forecastday[0].day.maxtemp_c);
  let dayAvgtemp_c1 = Math.floor(results.forecast.forecastday[0].day.avgtemp_c);
  let dayMintemp_c1 = Math.floor(results.forecast.forecastday[0].day.mintemp_c);
  let maxwind_kph1 = results.forecast.forecastday[0].day.maxwind_kph;
  let maxwind_mph1 = results.forecast.forecastday[0].day.maxwind_mph;
  let sunrise1 = results.forecast.forecastday[0].astro.sunrise;
  let sunset1 = results.forecast.forecastday[0].astro.sunset;

  // second day
  // const daysBc2 = results.forecast.forecastday[1].day.condition.text;
  let dayDate2 = results.forecast.forecastday[1].date;
  let dayIcon2 = results.forecast.forecastday[1].day.condition.icon;
  let dayText2 = results.forecast.forecastday[1].day.condition.text;
  let dayMaxtemp2 = Math.floor(results.forecast.forecastday[1].day.maxtemp_c);
  let dayAvgtemp_c2 = Math.floor(results.forecast.forecastday[1].day.avgtemp_c);
  let dayMintemp_c2 = Math.floor(results.forecast.forecastday[1].day.mintemp_c);
  let maxwind_kph2 = results.forecast.forecastday[1].day.maxwind_kph;
  let maxwind_mph2 = results.forecast.forecastday[1].day.maxwind_mph;
  let sunrise2 = results.forecast.forecastday[1].astro.sunrise;
  let sunset2 = results.forecast.forecastday[1].astro.sunset;
  // third day

  // const daysBc3 = results.forecast.forecastday[2].day.condition.text;
  let dayDate3 = results.forecast.forecastday[2].date;
  let dayIcon3 = results.forecast.forecastday[2].day.condition.icon;
  let dayText3 = results.forecast.forecastday[2].day.condition.text;
  let dayMaxtemp3 = Math.floor(results.forecast.forecastday[2].day.maxtemp_c);
  let dayAvgtemp_c3 = Math.floor(results.forecast.forecastday[2].day.avgtemp_c);
  let dayMintemp_c3 = Math.floor(results.forecast.forecastday[2].day.mintemp_c);
  let maxwind_kph3 = results.forecast.forecastday[2].day.maxwind_kph;
  let maxwind_mph3 = results.forecast.forecastday[2].day.maxwind_mph;
  let sunrise3 = results.forecast.forecastday[2].astro.sunrise;
  let sunset3 = results.forecast.forecastday[2].astro.sunset;

  return (
    <div className="days_container">
      {/* <div id="bc_cont1" className={daysBc1}> */}
      <div className="day1 days ">
        <p style={{ textAlign: "center", color: "darkBlue" }}>{dayDate1}</p>
        <div className="temp">
          <div className="icons" style={{ width: "50%", height: "10vh" }}>
            <img src={dayIcon2} alt="" />
          </div>
          <div className="max_av_min" style={{ fontSize: "14px" }}>
            <p className="max"> max: {dayMaxtemp1}° </p>
            <p className="ave">Ave: {dayAvgtemp_c1}°</p>
            <p className="min">min: {dayMintemp_c1}°</p>
          </div>
        </div>
        <div className="icon_date">
          <p style={{ color: "darkBlue", padding: "3px" }}>{dayText1}</p>
          <div className="forecast_details">
            <p> maxwind_kph: {maxwind_kph1}</p>
            <p> maxwind_mph: {maxwind_mph1}</p>
            <p> sunrise: {sunrise1}</p>
            <p> sunset: {sunset1}</p>
          </div>
        </div>
      </div>

      <div className="day2 days">
        <p style={{ textAlign: "center", color: "darkBlue" }}>{dayDate2}</p>
        <div className="temp">
          <div className="icons" style={{ width: "50%", height: "10vh" }}>
            <img src={dayIcon1} alt="" />
          </div>
          <div className="max_av_min" style={{ fontSize: "14px" }}>
            <p className="max"> max: {dayMaxtemp2}° </p>
            <p className="ave">Ave: {dayAvgtemp_c2}°</p>
            <p className="min">min: {dayMintemp_c2}°</p>
          </div>
        </div>
        <div className="icon_date">
          <p style={{ color: "darkBlue", padding: "3px" }}>{dayText2}</p>
          <div className="forecast_details">
            <p> maxwind_kph: {maxwind_kph2}</p>
            <p> maxwind_mph: {maxwind_mph2}</p>
            <p> sunrise: {sunrise2}</p>
            <p> sunset: {sunset2}</p>
          </div>
        </div>
      </div>

      <div className="day3 days ">
        <p style={{ textAlign: "center", color: "darkBlue" }}>{dayDate3}</p>

        <div className="temp">
          <div className="icons" style={{ width: "50%", height: "10vh" }}>
            <img src={dayIcon3} alt="" />
          </div>
          <div className="max_av_min" style={{ fontSize: "14px" }}>
            <p className="max"> max: {dayMaxtemp3}° </p>
            <p className="ave">Ave: {dayAvgtemp_c3}°</p>
            <p className="min">min: {dayMintemp_c3}°</p>
          </div>
        </div>
        <div className="icon_date">
          <p style={{ color: "darkBlue", padding: "3px" }}>{dayText3}</p>
          <div className="forecast_details">
            <p> maxwind_kph: {maxwind_kph3}</p>
            <p> maxwind_mph: {maxwind_mph3}</p>
            <p> sunrise: {sunrise3}</p>
            <p> sunset: {sunset3}</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ThreeDaysForcast;
