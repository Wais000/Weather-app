import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import useFetch from "../fetch/useFetch";

const CurrentWeather = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;

  if (loading) return <p> Loading...</p>;
  if (error) return <p> {error.message}</p>;

  const generatedIcon = results.current.condition.text;
  let localTime = results.location.localtime;
  let cityName = results.location.name;
  let CountryName = results.location.country;
  let Temperature = Math.floor(data.results.current.temp_c);
  let weatherCondition = results.current.condition.text;
  let lastUpdate = results.current.last_updated;
/*   let wind_mph = results.current.wind_mph; */
  let wind_dir = results.current.wind_dir;
  let wind_kph = results.current.wind_kph;
  let pressure_mb = results.current.pressure_mb;
  let pressure_in = results.current.pressure_in;
  let wind_degree = results.current.wind_degree;
  let humidity = results.current.humidity;
/*   let latitude = results.location.lat;
  let longitude = results.location.lon; */
  /* let icon=results.current.condition.icon */

  return (
    <div className="current-weather" >
      <h1 style={{fontSize:"2.5rem"}}>
        {cityName}, {CountryName}
      </h1>
      <p style={{color:"white"}}>{localTime}</p>
      <p style={{fontSize:"1.5rem",color:"white"}}>{weatherCondition}</p>
      <div className="icon-temp" style={{ /* border: "2px solid red" */ }}>
        <div className="tem_icon">
          <div className="icon_tem_div">
            <div id="icon" className={generatedIcon}>
            </div>
          
          </div>
        </div>
   
        <h1>{Temperature}°</h1>
{/*         <div className="lat_lon" style={{border:"3px solid red"}}>
              <p>lat: {latitude}</p>
      <p>lat: {longitude}</p>
      </div> */}
       </div>
       <div className="more_details">
          <p style={{color:"white"}}>Last updated on {lastUpdate}</p>
      <div className="details_container">
     <div className="wind">
 
         <p>- Wind direction: {wind_dir} </p>
         <p>- Wind kph: {wind_kph} </p>
         <p>- Wind degree: {wind_degree} </p>
 
       </div> 
       <div className="pressure">
         <p>- Pressure mb: {pressure_mb} </p>
         <p>- Pressure in: {pressure_in} </p>
         <p>- Humidity: {humidity} </p>
        
 </div>
       </div> 
       </div>
     </div>

     
 
  );
};

export default CurrentWeather;
