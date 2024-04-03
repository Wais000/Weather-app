import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import useFetch from "../fetch/useFetch";
import "./HourlyWeather.css";
import { GiWindSlap } from "react-icons/gi";
import { LuWind } from "react-icons/lu";
import { MdOutlineWindPower } from "react-icons/md";
import { WiWindDeg } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

const CurrentWeather = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;

  if (loading) return <p> Loading...</p>;
  if (error) return <p> {error.message}</p>;
  if (!results || !results.current) return <p> No current weather data available.</p>;


  const generatedIcon = results.current.condition.icon;
  let localTime = results.location.localtime;
  let cityName = results.location.name;
  let CountryName = (results.location.country = "");
  let Temperature = Math.floor(data.results.current.temp_c);
  let weatherCondition = results.current.condition.text;
  let lastUpdate = results.current.last_updated;
  let wind_dir = results.current.wind_dir;
  let wind_kph = results.current.wind_kph;
  let pressure_mb = results.current.pressure_mb;
  let pressure_in = results.current.pressure_in;
  let wind_degree = results.current.wind_degree;
  let humidity = results.current.humidity;

  return (
    <div className="current-weather">
      <h1>
        {cityName}, {CountryName}
      </h1>
      <p>{localTime}</p>
      <p>{weatherCondition}</p>
      <div className="icon-temp">
      
         
         
              <img src={generatedIcon} alt="" />
           
         
        

        <h1>{Temperature}°</h1>
      </div>
      <div className="more_details">
        <p style={{ color: "white" }}>Last updated on {lastUpdate}</p>
        <div className="details_container">
          <div className="wind">
            <p>
              <span>
                <GiWindSlap />
              </span>{" "}
              Wind direction: {wind_dir}{" "}
            </p>

            <p>
              <span>
                <MdOutlineWindPower />
              </span>{" "}
              Wind kph: {wind_kph}{" "}
            </p>
            <p>
              <span>
                <WiWindDeg />
              </span>
              Wind degree: {wind_degree}{" "}
            </p>
          </div>
          <div className="pressure">
            <p>
              <span>
                <LuWind />
              </span>
              Pressure mb: {pressure_mb}{" "}
            </p>
            <p>
              <span>
                <TiWeatherWindy />
              </span>
              Pressure in: {pressure_in}{" "}
            </p>
            <p>
              <WiHumidity />
              Humidity: {humidity}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
