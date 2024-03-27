import { Subject } from "./subject-interface";
import { Observer } from "./observer-interface";
import { Display } from "./display-interface";

export class CurrentConditionsDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;

  constructor(subject: Subject) {
    this.temperature = 0;
    this.humidity = 0;

    subject.registerObserver(this);
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`
    );
  }

  update(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }
}
