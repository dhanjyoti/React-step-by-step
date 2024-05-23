"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import useDebounce from "@/utils/use-debounce";
import constants from "@/utils/constants";

const apiKey = "56892000603c4d5c94b31b8732467a62";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const checkWeather = async (city) => {
  return fetch(apiUrl + city + `&appid=${apiKey}`);
};

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useDebounce(
    async () => {
      if (city) {
        checkWeather(city)
          .then((r) => r.json())
          .then((res) => {
            if (res.cod && res.message) {
              setError(res.message);
              setWeather(null);
            } else {
              setWeather(res);
              setError(null);
            }
          })
          .catch((e) => {
            setError(e);
          });
      } else {
        setWeather(null);
      }
    },
    500,
    [city]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gradient-to-br from-green-300 to-purple-600 text-white rounded-2xl">
        <div className="mb-4">
          <InputField
            label="Enter city name"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {weather && (
          <div className="text-center">
            <img
              src={`${
                constants.basePath
              }/images/${weather?.weather?.[0].main.toLowerCase()}.png`}
              alt="Weather Icon"
              className="w-32 mx-auto"
            />
            <h1 className="text-6xl">{Math.round(weather.main?.temp)}°c</h1>
            <h2 className="text-4xl">{weather.name}</h2>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <img
                  src={constants.basePath + "/images/humidity.png"}
                  alt="Humidity Icon"
                  className="w-8 mr-2"
                />
                <div>
                  <p className="text-xl">{weather.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={constants.basePath + "/images/wind.png"}
                  alt="Wind Icon"
                  className="w-8 mr-2"
                />
                <div>
                  <p className="text-xl">{weather.wind.speed} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
