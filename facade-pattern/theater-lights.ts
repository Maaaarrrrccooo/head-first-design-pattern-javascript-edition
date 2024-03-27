// Define the TheaterLights class
export class TheaterLights {
  description: string = "";
  // Constructor to initialize the description property
  constructor(description: string) {
    this.description = description;
  }

  // Method to turn on the lights
  on() {
    console.log(`${this.description} on`);
  }

  // Method to turn off the lights
  off() {
    console.log(`${this.description} off`);
  }

  // Method to dim the lights to a specified level
  dim(level: number) {
    console.log(`${this.description} dimming to ${level}%`);
  }

  // Override the toString() method to return the description property
  toString() {
    return this.description;
  }
}
