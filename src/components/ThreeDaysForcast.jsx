import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import useFetch from "../fetch/useFetch";

const ThreeDaysForcast = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (!results || !results.forecast || !results.forecast.forecastday) {
    return <p>No forecast data available.</p>;
  }

  const forecastDays = results.forecast.forecastday;

  if (forecastDays.length < 3) {
    return <p>Insufficient forecast data available.</p>;
  }

  const renderForecastDay = (dayIndex) => {
    const day = forecastDays[dayIndex].day;
    const astro = forecastDays[dayIndex].astro;

    return (
      <div className="days">
        <p style={{ textAlign: "center", color: "darkBlue" }}>
          {forecastDays[dayIndex].date}
        </p>
        <div className="temp">
          <div className="icons" style={{ width: "50%", height: "10vh" }}>
            <img src={day.condition.icon} alt="" />
          </div>
          <div className="max_av_min" style={{ fontSize: "14px" }}>
            <p className="max">max: {Math.floor(day.maxtemp_c)}°</p>
            <p className="ave">Ave: {Math.floor(day.avgtemp_c)}°</p>
            <p className="min">min: {Math.floor(day.mintemp_c)}°</p>
          </div>
        </div>
        <div className="icon_date">
          <p style={{ color: "darkBlue", padding: "3px" }}>{day.condition.text}</p>
          <div className="forecast_details">
            <p>maxwind_kph: {day.maxwind_kph}</p>
            <p>maxwind_mph: {day.maxwind_mph}</p>
            <p>sunrise: {astro.sunrise}</p>
            <p>sunset: {astro.sunset}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="days_container">
      {renderForecastDay(0)}
      {renderForecastDay(1)}
      {renderForecastDay(2)}
    </div>
  );
};

export default ThreeDaysForcast;
