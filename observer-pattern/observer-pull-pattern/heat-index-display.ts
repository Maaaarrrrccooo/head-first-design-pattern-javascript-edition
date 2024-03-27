import { Display } from "./display-interface";
import { Observer } from "./observer-interface";
import { WeatherData } from "./weather-data";

export class HeatIndexDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;

  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;

    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  private calculateHeatIndex(): number {
    return (
      -42.379 +
      2.04901523 * this.temperature +
      10.14333127 * this.humidity -
      0.22475541 * this.temperature * this.humidity -
      0.00683783 * this.temperature * this.temperature -
      0.05481717 * this.humidity * this.humidity +
      0.00122874 * this.temperature * this.temperature * this.humidity +
      0.00085282 * this.temperature * this.humidity * this.humidity -
      0.00000199 *
        this.temperature *
        this.temperature *
        this.humidity *
        this.humidity
    );
  }

  display(): void {
    console.log(`Heat index is ${this.calculateHeatIndex()}`);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature;
    this.humidity = this.weatherData.getHumidity;

    this.display();
  }
}
