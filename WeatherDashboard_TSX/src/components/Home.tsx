import { WeatherData } from "../weather";

interface WeatherDataProps {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

function Home({ data, loading, error }: WeatherDataProps) {
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );

  return (
    <section className="min-h-[100vh] w-[70vw] py-12">
      {loading ? (
        <p className="text-center">Loading Weather Data...</p>
      ) : (
        <>
          <h1 className="text-3xl text-center font-bold my-4">
            Weather for {data?.name}
          </h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Temperature</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $0
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Temperature is <span>{data?.main.temp}</span>
                    </li>
                    <li>
                      Min Temperature is <span>{data?.main.temp_min}</span>
                    </li>
                    <li>
                      Max Temperature is <span>{data?.main.temp_max}</span>
                    </li>
                    <li>
                      Clouds PCT is <span>{data?.clouds.all}</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $15
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Feels like <span>{data?.main.feels_like}</span>
                    </li>
                    <li>
                      Humidity is <span>{data?.main.humidity}</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $29
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Wind Speed is <span>{data?.wind.speed}</span>
                    </li>
                    <li>
                      Wind Degree is <span>{data?.wind.deg}</span>
                    </li>
                    <li>
                      Sunrise Time is{" "}
                      <span>
                        {new Date(
                          data?.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </span>
                    </li>
                    <li>
                      Sunset Time is{" "}
                      <span>
                        {new Date(data?.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-6 text-center mt-6 mb-4">
            Weather of other common places
          </h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}></th>
                  <th style={{ width: "22%" }}>temp</th>
                  <th style={{ width: "22%" }}>temp_max</th>
                  <th style={{ width: "22%" }}>temp_min</th>
                  <th style={{ width: "22%" }}>feels_like</th>
                  <th style={{ width: "22%" }}>pressure</th>
                  <th style={{ width: "22%" }}>sea_level</th>
                  <th style={{ width: "22%" }}>grnd_level</th>
                  <th style={{ width: "22%" }}>humidity</th>
                  <th style={{ width: "22%" }}>wind</th>
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
        </>
      )}
    </section>
  );
}

export default Home;
