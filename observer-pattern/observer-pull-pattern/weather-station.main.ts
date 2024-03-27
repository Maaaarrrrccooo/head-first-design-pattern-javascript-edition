import { WeatherData } from "./weather-data";
import { CurrentConditionsDisplay } from "./current-conditions-display";
import { HeatIndexDisplay } from "./heat-index-display";

function run() {
  const weatherData = new WeatherData();
  new CurrentConditionsDisplay(weatherData);
  new HeatIndexDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 2);
}

run();
