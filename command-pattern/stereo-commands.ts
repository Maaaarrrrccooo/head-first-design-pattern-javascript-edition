import { Command } from "./command";

export class Stereo {
  on() {
    console.log("Stereo is on");
  }

  off() {
    console.log("Stereo is off");
  }

  setCD() {
    console.log("Stereo cd has been inserted");
  }

  setDvd() {
    console.log("Stereo dvd has been inserted");
  }

  setRadio() {
    console.log("Stereo radio is on");
  }

  setVolume(level: number) {
    console.log(`Stereo volume level: ${level}`);
  }
}

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(5);
  }
  undo(): void {
    this.stereo.off();
  }
}

export class StereoOffCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute(): void {
    this.stereo.off();
  }
  undo(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(5);
  }
}

export class StereoOnWithDvdCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute(): void {
    this.stereo.on();
    this.stereo.setDvd();
    this.stereo.setVolume(5);
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
}

export class StereoOnWithRadioCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute(): void {
    this.stereo.on();
    this.stereo.setRadio();
    this.stereo.setVolume(5);
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
}
