import { Amplifier } from "./amplifier";

// This class represents a tuner in a home theater system.
export class Tuner {
  // The description of the tuner, such as "Tuner 1" or "Living Room Tuner."
  description: string;

  // The amplifier that the tuner is connected to.
  amplifier: Amplifier | null;

  // The current frequency that the tuner is set to.
  frequency: number;

  // Creates a new tuner with the given description and amplifier.
  constructor(description: string, amplifier: Amplifier | null) {
    this.description = description;
    this.amplifier = amplifier;
    this.frequency = 0;
  }

  // Turns on the tuner.
  public on(): void {
    console.log(`${this.description} on`);
  }

  // Turns off the tuner.
  public off(): void {
    console.log(`${this.description} off`);
  }

  // Sets the frequency of the tuner to the given value.
  public setFrequency(frequency: number): void {
    console.log(`${this.description} setting frequency to ${frequency}`);
    this.frequency = frequency;
  }

  // Sets the tuner to AM mode.
  public setAm(): void {
    console.log(`${this.description} setting AM mode`);
  }

  // Sets the tuner to FM mode.
  public setFm(): void {
    console.log(`${this.description} setting FM mode`);
  }

  // Returns a string representation of the tuner.
  public toString(): string {
    return this.description;
  }
}
