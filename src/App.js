import { useState } from "react";
import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  function handleChangeWeather(weatherData, cityName) {
    setCity(cityName);
    setWeather(weatherData);
  }
  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather weather={weather} city={city} />
    </div>
  );
}

export default App;
