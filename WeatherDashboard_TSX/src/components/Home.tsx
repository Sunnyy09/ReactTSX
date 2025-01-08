import { WeatherData } from "../weather";
import WeatherTable from "./WeatherTable";

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
    <section className="min-h-[100vh] w-[80vw] py-12">
      {loading ? (
        <p className="text-center">Loading Weather Data...</p>
      ) : (
        <>
          <h1 className="text-3xl text-center font-bold mb-8">
            Weather for {data?.name}
          </h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center min-h-80 md:flex md:flex-wrap">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm lg:min-h-full sm:h-full">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Temperature</h4>
                </div>
                <div className="card-body">
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
              <div className="card mb-4 rounded-3 shadow-sm lg:min-h-full sm:h-full">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Humidity Info</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Feels like <span>{data?.main.feels_like}</span>
                    </li>
                    <li>
                      Humidity is <span>{data?.main.humidity}</span>
                    </li>
                    <li>
                      Pressure is <span>{data?.main.pressure}</span>
                    </li>
                    <li>
                      Sea Level is <span>{data?.main.sea_level}</span>
                    </li>
                    <li>
                      Ground Level is <span>{data?.main.grnd_level}</span>
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
              <div className="card rounded-3 shadow-sm border-primary lg:min-h-full sm:h-full">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Wind Info</h4>
                </div>
                <div className="card-body">
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

          <div>
            <WeatherTable />
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
