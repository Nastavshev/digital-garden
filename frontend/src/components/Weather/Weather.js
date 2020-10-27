import React, { useEffect, useState } from 'react';
import logger from '../../misc/logger';

export default function Weather() {
  const apiKeyForWeather = '5259742ae25be266ed1f941918962295';
  const [weather, setStateWeather] = useState({});
  useEffect(() => {
    async function getWheather() {
      async function getCity() {
        try {
          const response = await fetch('http://ip-api.com/json');
          const data = await response.text();
          const dataParse = JSON.parse(data);
          const locationCity = dataParse.regionName;
          return locationCity;
        } catch (err) {
          logger.error(err);
        }
      }

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${await getCity()}&units=metric&appid=${apiKeyForWeather}&lang=ru`);
      const data = await response.text();
      const objWheather = JSON.parse(data);
      const temperature = parseInt(objWheather.main.temp, 10);
      const iconWeather = objWheather.weather[0].icon;
      const clouds = objWheather.weather[0].description;
      const wind = objWheather.wind.speed;
      setStateWeather({
        temperature, clouds, wind, iconWeather,
      });
    }
    getWheather();
  }, []);

  return (
    <div>
      <p>
        {' '}
        Температура за бортом:
        {weather.temperature}
        {' '}
        С,
        {' '}
      </p>
      <p>
        {' '}
        {weather.clouds}
        ,
      </p>
      <p>
        {' '}
        cила ветра:
        {weather.wind}
        {' '}
        м/с
      </p>
      <div>
        {' '}
        <img style={{ width: '20%' }} src={`https://openweathermap.org/img/wn/${weather.iconWeather}@2x.png`} alt="icon" />
      </div>
    </div>
  );
}
