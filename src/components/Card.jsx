import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
    {/* { const temp = weather.data?.main?.temp} */}
      {/* <h2>{weather.data?.main?.temp-273}°C{weather.data?.weather?.[0]?.description}</h2> */}
<h2>{(weather.data?.main?.temp-273).toFixed(1)}°C {weather.data?.weather?.[0]?.description}</h2>

      <h2>
    {weather.data?.name}, {weather.data?.sys?.country},
       
      </h2>
    </div>
  );
};

export default Card;