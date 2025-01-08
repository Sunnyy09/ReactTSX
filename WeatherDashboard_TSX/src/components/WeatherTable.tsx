import { useWeatherInfo } from "../hooks/useWeatherInfo";
import { useState, useEffect } from "react";

function WeatherTable() {
  const cities = [
    "Fatehgarh Sahib",
    "Boston",
    "Lucknow",
    "Kolkata",
    "Chandigarh",
    "Shanghai",
  ];

  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  const weatherData = cities.map((city: string) => {
    useWeatherInfo(city, triggerSearch);
  });

  useEffect(() => {
    setTriggerSearch((prev) => !prev);
  }, []);

  return (
    <div>
      <h2 className="display-6 text-center mt-6 mb-4">
        Weather of other common places
      </h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "18%" }}>City</th>
              <th style={{ width: "12%" }}>Temp (°C)</th>
              <th style={{ width: "12%" }}>Max Temp (°C)</th>
              <th style={{ width: "12%" }}>Min Temp (°C)</th>
              <th style={{ width: "12%" }}>Feels Like (°C)</th>
              <th style={{ width: "12%" }}>Pressure (hPa)</th>
              <th style={{ width: "12%" }}>Sea Level (hPa)</th>
              <th style={{ width: "22%" }}>Ground Level (hPa)</th>
              <th style={{ width: "22%" }}>Humidity (%)</th>
              <th style={{ width: "22%" }}>Wind (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Fatehgarh Sahib
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Boston
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Lucknow
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Kolkata
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Chandigarh
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Shanghai
              </th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherTable;
