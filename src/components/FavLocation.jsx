
import React, { useState, useEffect, useCallback } from 'react';
import { useWeather } from "../context/Weather";
import './favLocation.css';

function FavLocation() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [];
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setList((prevList) => [...prevList, inputValue]);
      setInputValue('');
    }
  };

  const weather = useWeather();

  

    const search = useCallback((index) => {
    const foundElement = list[index];
    weather.fetchData(foundElement);
    weather.setSearchCity(foundElement);
  }, [list, weather]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add to list</button>
      <ul>
        {list.map((item, index) => (
          <button onMouseMove={(e) => search(index)} key={index}>{item}</button>
        ))}
      </ul>
    </div>
  );
}

export default FavLocation;
