import { Observer } from "./observer-interface";
import { Display } from "./display-interface";
import { WeatherData } from "./weather-data";

export class CurrentConditionsDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;

    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`
    );
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature;
    this.humidity = this.weatherData.getHumidity;

    this.display();
  }
}
