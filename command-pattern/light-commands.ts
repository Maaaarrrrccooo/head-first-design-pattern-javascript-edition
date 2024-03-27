import { Command } from "./command";

// Receiver
export class Light {
  on(): void {
    console.log("Light is On!");
  }

  off(): void {
    console.log("Light is Off!");
  }
}

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
  undo(): void {
    this.light.on();
  }
}
