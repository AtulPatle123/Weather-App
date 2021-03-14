import React, { useEffect, useState } from "react";
import "../index.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c2129d6a4b97490c21ea3ae92115622c
`;
      const response = await fetch(url);
      // console.log(response);
      const resjson = await response.json();
      console.log(resjson);
      setCity(resjson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
      <h1 id="nodata1">Weather App</h1>
        <div className="inputData">
          <input
            placeholder="Enter city"
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
{/* : Your account is temporary blocked due to exceeding…oper subscription */}
        {!city ? (
          <p id="nodata">No Data Found </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"> {search}</i>
              </h2>
              <h1 className="temp">{city.temp}</h1>

              <h3 className="tempmin_max">min: {city.temp_min}°Cel | max : {city.temp_max}°Cel</h3>
            </div>

            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
