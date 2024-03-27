import { Display } from "./display-interface";
import { Observer } from "./observer-interface";
import { Subject } from "./subject-interface";

export class HeatIndexDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;

  constructor(subject: Subject) {
    this.temperature = 0;
    this.humidity = 0;

    subject.registerObserver(this);
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

  update(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }
}
