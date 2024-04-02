import { useContext } from "react";
import MyContext from "./context/MyContext";
import useFetch from "./fetch/useFetch";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import ThreeDaysForcast from "./components/ThreeDaysForcast";

const App = () => {
  const context = useContext(MyContext);
  const { search } = context;

  const data = useFetch(search);
  const { results, loading, error } = data;

  if (loading) return <p> Loading...</p>;
  if (error) return <p> {error.message}</p>;

  const generatedIcon = results.current.condition.text;


  return (
    <main id="main_container" className={generatedIcon}>
      <div className="left">
        <CurrentWeather />
        <Form />
        <ThreeDaysForcast />
      </div>
      <div className="right">
        <HourlyWeather />
      </div>
    </main>
  );
};

export default App;
