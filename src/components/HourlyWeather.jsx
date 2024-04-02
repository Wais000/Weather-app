import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import useFetch from "../fetch/useFetch";
import "./HourlyWeather.css";
const HourlyWeather = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;
  if (loading) return <p> Loading...</p>;
  if (error) return <p> {error.message}</p>;
  console.log(data);

  let hourly = results.forecast.forecastday[0].hour[0].condition.text;
  let hourlyIcon = results.forecast.forecastday[0].hour[0].condition.icon;
  let hourlyTemp = Math.floor(results.forecast.forecastday[0].hour[0].temp_c);
  let hourlyTime = results.forecast.forecastday[0].hour[0].time.substring(11);

  let hourly1 = results.forecast.forecastday[0].hour[1].condition.text;
  let hourlyIcon1 = results.forecast.forecastday[0].hour[1].condition.icon;
  let hourlyTemp1 = Math.floor(results.forecast.forecastday[0].hour[1].temp_c);
  let hourlyTime1 = results.forecast.forecastday[0].hour[1].time.substring(11);

  let hourly2 = results.forecast.forecastday[0].hour[2].condition.text;
  let hourlyIcon2 = results.forecast.forecastday[0].hour[2].condition.icon;
  let hourlyTemp2 = Math.floor(results.forecast.forecastday[0].hour[2].temp_c);
  let hourlyTime2 = results.forecast.forecastday[0].hour[2].time.substring(11);

  let hourly3 = results.forecast.forecastday[0].hour[3].condition.text;
  let hourlyIcon3 = results.forecast.forecastday[0].hour[3].condition.icon;
  let hourlyTemp3 = Math.floor(results.forecast.forecastday[0].hour[3].temp_c);
  let hourlyTime3 = results.forecast.forecastday[0].hour[3].time.substring(11);

  let hourly4 = results.forecast.forecastday[0].hour[4].condition.text;
  let hourlyIcon4 = results.forecast.forecastday[0].hour[4].condition.icon;
  let hourlyTemp4 = Math.floor(results.forecast.forecastday[0].hour[4].temp_c);
  let hourlyTime4 = results.forecast.forecastday[0].hour[4].time.substring(11);

  let hourly5 = results.forecast.forecastday[0].hour[5].condition.text;
  let hourlyIcon5 = results.forecast.forecastday[0].hour[5].condition.icon;
  let hourlyTemp5 = Math.floor(results.forecast.forecastday[0].hour[5].temp_c);
  let hourlyTime5 = results.forecast.forecastday[0].hour[5].time.substring(11);

  let hourly6 = results.forecast.forecastday[0].hour[6].condition.text;
  let hourlyIcon6 = results.forecast.forecastday[0].hour[6].condition.icon;
  let hourlyTemp6 = Math.floor(results.forecast.forecastday[0].hour[6].temp_c);
  let hourlyTime6 = results.forecast.forecastday[0].hour[6].time.substring(11);

  let hourly7 = results.forecast.forecastday[0].hour[7].condition.text;
  let hourlyIcon7 = results.forecast.forecastday[0].hour[7].condition.icon;
  let hourlyTemp7 = Math.floor(results.forecast.forecastday[0].hour[7].temp_c);
  let hourlyTime7 = results.forecast.forecastday[0].hour[7].time.substring(11);

  let hourly8 = results.forecast.forecastday[0].hour[8].condition.text;
  let hourlyIcon8 = results.forecast.forecastday[0].hour[8].condition.icon;
  let hourlyTemp8 = Math.floor(results.forecast.forecastday[0].hour[8].temp_c);
  let hourlyTime8 = results.forecast.forecastday[0].hour[8].time.substring(11);

  let hourly9 = results.forecast.forecastday[0].hour[9].condition.text;
  let hourlyIcon9 = results.forecast.forecastday[0].hour[9].condition.icon;
  let hourlyTemp9 = Math.floor(results.forecast.forecastday[0].hour[9].temp_c);
  let hourlyTime9 = results.forecast.forecastday[0].hour[9].time.substring(11);

  let hourly10 = results.forecast.forecastday[0].hour[10].condition.text;
  let hourlyIcon10 = results.forecast.forecastday[0].hour[10].condition.icon;
  let hourlyTemp10 = Math.floor(
    results.forecast.forecastday[0].hour[10].temp_c
  );
  let hourlyTime10 =
    results.forecast.forecastday[0].hour[10].time.substring(11);

  let hourly11 = results.forecast.forecastday[0].hour[11].condition.text;
  let hourlyIcon11 = results.forecast.forecastday[0].hour[11].condition.icon;
  let hourlyTemp11 = Math.floor(
    results.forecast.forecastday[0].hour[11].temp_c
  );
  let hourlyTime11 =
    results.forecast.forecastday[0].hour[11].time.substring(11);

  let hourly12 = results.forecast.forecastday[0].hour[12].condition.text;
  let hourlyIcon12 = results.forecast.forecastday[0].hour[12].condition.icon;
  let hourlyTemp12 = Math.floor(
    results.forecast.forecastday[0].hour[12].temp_c
  );
  let hourlyTime12 =
    results.forecast.forecastday[0].hour[12].time.substring(11);

  let hourly13 = results.forecast.forecastday[0].hour[13].condition.text;
  let hourlyIcon13 = results.forecast.forecastday[0].hour[13].condition.icon;
  let hourlyTemp13 = Math.floor(
    results.forecast.forecastday[0].hour[13].temp_c
  );
  let hourlyTime13 =
    results.forecast.forecastday[0].hour[13].time.substring(11);

  let hourly14 = results.forecast.forecastday[0].hour[14].condition.text;
  let hourlyIcon14 = results.forecast.forecastday[0].hour[14].condition.icon;
  let hourlyTemp14 = Math.floor(
    results.forecast.forecastday[0].hour[14].temp_c
  );
  let hourlyTime14 =
    results.forecast.forecastday[0].hour[14].time.substring(11);

  let hourly15 = results.forecast.forecastday[0].hour[15].condition.text;
  let hourlyIcon15 = results.forecast.forecastday[0].hour[15].condition.icon;
  let hourlyTemp15 = Math.floor(
    results.forecast.forecastday[0].hour[15].temp_c
  );
  let hourlyTime15 =
    results.forecast.forecastday[0].hour[15].time.substring(11);

  let hourly16 = results.forecast.forecastday[0].hour[16].condition.text;
  let hourlyIcon16 = results.forecast.forecastday[0].hour[16].condition.icon;
  let hourlyTemp16 = Math.floor(
    results.forecast.forecastday[0].hour[16].temp_c
  );
  let hourlyTime16 =
    results.forecast.forecastday[0].hour[16].time.substring(11);

  let hourly17 = results.forecast.forecastday[0].hour[17].condition.text;
  let hourlyIcon17 = results.forecast.forecastday[0].hour[17].condition.icon;
  let hourlyTemp17 = Math.floor(
    results.forecast.forecastday[0].hour[17].temp_c
  );
  let hourlyTime17 =
    results.forecast.forecastday[0].hour[17].time.substring(11);

  let hourly18 = results.forecast.forecastday[0].hour[18].condition.text;
  let hourlyIcon18 = results.forecast.forecastday[0].hour[18].condition.icon;
  let hourlyTemp18 = Math.floor(
    results.forecast.forecastday[0].hour[18].temp_c
  );
  let hourlyTime18 =
    results.forecast.forecastday[0].hour[18].time.substring(11);

  let hourly19 = results.forecast.forecastday[0].hour[19].condition.text;
  let hourlyIcon19 = results.forecast.forecastday[0].hour[19].condition.icon;
  let hourlyTemp19 = Math.floor(
    results.forecast.forecastday[0].hour[19].temp_c
  );
  let hourlyTime19 =
    results.forecast.forecastday[0].hour[19].time.substring(11);

  let hourly20 = results.forecast.forecastday[0].hour[20].condition.text;
  let hourlyIcon20 = results.forecast.forecastday[0].hour[20].condition.icon;
  let hourlyTemp20 = Math.floor(
    results.forecast.forecastday[0].hour[20].temp_c
  );
  let hourlyTime20 =
    results.forecast.forecastday[0].hour[20].time.substring(11);
  let hourly21 = results.forecast.forecastday[0].hour[21].condition.text;
  let hourlyIcon21 = results.forecast.forecastday[0].hour[21].condition.icon;
  let hourlyTemp21 = Math.floor(
    results.forecast.forecastday[0].hour[21].temp_c
  );
  let hourlyTime21 =
    results.forecast.forecastday[0].hour[21].time.substring(11);

  let hourly22 = results.forecast.forecastday[0].hour[22].condition.text;
  let hourlyIcon22 = results.forecast.forecastday[0].hour[22].condition.icon;
  let hourlyTemp22 = Math.floor(
    results.forecast.forecastday[0].hour[22].temp_c
  );
  let hourlyTime22 =
    results.forecast.forecastday[0].hour[22].time.substring(11);

  let hourly23 = results.forecast.forecastday[0].hour[23].condition.text;
  let hourlyIcon23 = results.forecast.forecastday[0].hour[23].condition.icon;
  let hourlyTemp23 = Math.floor(
    results.forecast.forecastday[0].hour[23].temp_c
  );
  let hourlyTime23 =
    results.forecast.forecastday[0].hour[23].time.substring(11);

  return (
    <div className="hourly_tem_box">
      <div className="temp_header">
        <p>Time</p>
        <p className="header_forecast">Forecast</p>
      </div>
      <div className="hourly box">
        <p>{hourlyTime}am</p>
        {/* <div className={hourlyIcon}></div> */}
        <img className="hourlyIcons" src={hourlyIcon} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp}°</h5>
          <br /> <p>{hourly}</p>
        </div>
      </div>

      <div className="hourly1 box">
        <p>{hourlyTime1}am</p>
        {/* <div className={hourlyIcon1}></div> */}
        <img className="hourlyIcons" src={hourlyIcon1} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp1}°</h5>
          <p>{hourly1}</p>
        </div>
      </div>

      <div className="hourly2 box">
        <p>{hourlyTime2}am</p>
        {/* <div className={hourlyIcon2}></div> */}
        <img className="hourlyIcons" src={hourlyIcon2} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp2}°</h5>
          <p>{hourly2}</p>
        </div>
      </div>
      <div className="hourly3 box">
        <p>{hourlyTime3}am</p>
        {/* <div className={hourlyIcon3}></div> */}
        <img className="hourlyIcons" src={hourlyIcon3} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp3}°</h5>
          <p>{hourly3}</p>
        </div>
      </div>

      <div className="hourly4 box">
        <p>{hourlyTime4}am</p>
        {/* <div className={hourlyIcon4}></div> */}
        <img className="hourlyIcons" src={hourlyIcon4} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp4}°</h5>
          <p>{hourly4}</p>
        </div>
      </div>

      <div className="hourly5 box">
        <p>{hourlyTime5}am</p>
        {/* <div className={hourlyIcon5}></div> */}
        <img className="hourlyIcons" src={hourlyIcon5} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp5}°</h5>
          <p>{hourly5}</p>
        </div>
      </div>
      <div className="hourly6 box">
        <p>{hourlyTime6}am</p>
        {/* <div className={hourlyIcon6} style={{ border: "2px solid red" }}></div> */}
        <img className="hourlyIcons" src={hourlyIcon6} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp6}°</h5>
          <p>{hourly6}</p>
        </div>
      </div>

      <div className="hourly7 box">
        <p>{hourlyTime7}am</p>
        {/* <div className={hourlyIcon7} style={{ border: "2px solid red" }}></div> */}
        <img className="hourlyIcons" src={hourlyIcon7} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp7}°</h5>
          <p>{hourly7}</p>
        </div>
      </div>
      <div className="hourly8 box">
        <p>{hourlyTime8}am</p>
        {/* <div className={hourlyIcon8} style={{ border: "2px solid red" }}></div> */}
        <img className="hourlyIcons" src={hourlyIcon8} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp8}°</h5>
          <p>{hourly8}</p>
        </div>
      </div>
      <div className="hourly9 box">
        <p>{hourlyTime9}am</p>
        {/* <div className={hourlyIcon9}></div> */}
        <img className="hourlyIcons" src={hourlyIcon9} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp9}°</h5>
          <p>{hourly9}</p>
        </div>
      </div>

      <div className="hourly10 box">
        <p>{hourlyTime10}am</p>
        {/* <div className={hourlyIcon10}></div> */}
        <img className="hourlyIcons" src={hourlyIcon10} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp10}°</h5>
          <p>{hourly10}</p>
        </div>
      </div>

      <div className="hourly11 box">
        <p>{hourlyTime11}pm</p>
        {/* <div className={hourlyIcon11}></div> */}
        <img className="hourlyIcons" src={hourlyIcon11} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp11}°</h5>
          <p>{hourly11}</p>
        </div>
      </div>

      <div className="hourly12 box">
        <p>{hourlyTime12}pm</p>
        {/* <div className={hourlyIcon12}></div> */}
        <img className="hourlyIcons" src={hourlyIcon12} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp12}°</h5>
          <p>{hourly12}</p>
        </div>
      </div>

      <div className="hourly13 box">
        <p>{hourlyTime13}pm</p>
        {/* <div className={hourlyIcon13}></div> */}
        <img className="hourlyIcons" src={hourlyIcon13} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp13}°</h5>
          <p>{hourly13}</p>
        </div>
      </div>

      <div className="hourly14 box">
        <p>{hourlyTime14}pm</p>
        {/* <div className={hourlyIcon14}></div> */}
        <img className="hourlyIcons" src={hourlyIcon14} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp14}°</h5>
          <p>{hourly14}</p>
        </div>
      </div>

      <div className="hourly15 box">
        <p>{hourlyTime15}pm</p>
        {/* <div className={hourlyIcon15}></div> */}
        <img className="hourlyIcons" src={hourlyIcon15} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp15}°</h5>
          <p>{hourly15}</p>
        </div>
      </div>

      <div className="hourly16 box">
        <p>{hourlyTime16}pm</p>
        {/* <div className={hourlyIcon16}></div> */}
        <img className="hourlyIcons" src={hourlyIcon16} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp16}°</h5>
          <p>{hourly16}</p>
        </div>
      </div>

      <div className="hourly17 box">
        <p>{hourlyTime17}pm</p>
        {/* <div className={hourlyIcon17}></div> */}
        <img className="hourlyIcons" src={hourlyIcon17} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp17}°</h5>
          <p>{hourly17}</p>
        </div>
      </div>

      <div className="hourly18 box">
        <p>{hourlyTime18}pm</p>
        {/* <div className={hourlyIcon18}></div> */}
        <img className="hourlyIcons" src={hourlyIcon18} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp18}°</h5>
          <p>{hourly18}</p>
        </div>
      </div>

      <div className="hourly19 box">
        <p>{hourlyTime19}pm</p>
        {/* <div className={hourlyIcon19}></div> */}
        <img className="hourlyIcons" src={hourlyIcon19} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp19}°</h5>
          <p>{hourly19}</p>
        </div>
      </div>

      <div className="hourly20 box">
        <p>{hourlyTime20}pm</p>
        {/* <div className={hourlyIcon20}></div> */}
        <img className="hourlyIcons" src={hourlyIcon20} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp20}°</h5>
          <p>{hourly20}</p>
        </div>
      </div>

      <div className="hourly21 box">
        <p>{hourlyTime21}pm</p>
        {/* <div className={hourlyIcon21}></div> */}
        <img className="hourlyIcons" src={hourlyIcon21} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp21}°</h5>
          <p>{hourly21}</p>
        </div>
      </div>

      <div className="hourly22 box">
        <p>{hourlyTime22}pm</p>
        {/* <div className={hourlyIcon22}></div> */}
        <img className="hourlyIcons" src={hourlyIcon22} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp22}°</h5>
          <p>{hourly22}</p>
        </div>
      </div>

      <div className="hourly23 box">
        <p>{hourlyTime23}pm</p>
        {/* <div className={hourlyIcon23}></div> */}
        <img className="hourlyIcons" src={hourlyIcon23} alt="" />
        <div className="temp_merged">
          <h5>{hourlyTemp23}°</h5>
          <p>{hourly23}</p>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
