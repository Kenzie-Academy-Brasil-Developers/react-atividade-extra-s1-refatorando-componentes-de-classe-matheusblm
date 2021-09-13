import { useState, useEffect } from "react";
import "./style.css";

function SearchWeather({ handleChangeWeather }) {
  const [inputValue, setInputValeu] = useState("Curitiba");
  const [data, setData] = useState();
  useEffect(() => {
    handleSubmit(inputValue);
  }, []);

  const handleSubmit = (valeu) => {
    setInputValeu(valeu);
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue));
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValeu(e.target.value)}
        />
      </div>
      <div>
        <button
          className="search-button"
          onClick={() => handleSubmit(inputValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchWeather;
