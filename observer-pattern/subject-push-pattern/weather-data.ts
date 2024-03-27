import { Subject } from "./subject-interface";
import { Observer } from "./observer-interface";

export class WeatherData implements Subject {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  private observers: Observer[];

  constructor() {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.observers = [];
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = [];
  }

  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
