// const baseURL =

//    "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c08908a3ae85f05d116effcd91daccf8"

// export const getWeatherDataForCity = async (city) => {
//   const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
//   return await response.json();
// };

// export const getWeatherDataForLocation = async (lat, lon) => {
//   const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
//   return await response.json();
// };

const baseURL = "https://api.openweathermap.org/data/2.5/weather";
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=c08908a3ae85f05d116effcd91daccf8
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}?q=${city}&appid=c08908a3ae85f05d116effcd91daccf8`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=c08908a3ae85f05d116effcd91daccf8`);
  return await response.json();
};
