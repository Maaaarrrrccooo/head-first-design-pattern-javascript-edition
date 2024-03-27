import { Command } from "./command";

export class CeilingFan {
  static HIGH: number = 3;
  static MEDIUM: number = 2;
  static LOW: number = 1;
  static OFF: number = 0;

  location: string;

  speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  high() {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} fan is on ${this.speed}`);
  }

  medium() {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} fan is on ${this.speed}`);
  }

  low() {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} fan is on ${this.speed}`);
  }

  off() {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} fan is off`);
  }

  getSpeed() {
    return this.speed;
  }
}

export class CeilingFanOffCommand implements Command {
  ceilingFan: CeilingFan;
  prevState: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevState = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  undo(): void {
    if (this.prevState === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
    if (this.prevState === CeilingFan.LOW) {
      this.ceilingFan.low();
    }
    if (this.prevState === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    }
    if (this.prevState === CeilingFan.HIGH) {
      this.ceilingFan.high();
    }
  }
}

export class CeilingFanLowCommand implements Command {
  ceilingFan: CeilingFan;
  prevState: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevState = this.ceilingFan.getSpeed();
    this.ceilingFan.low();
  }

  undo(): void {
    if (this.prevState === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
    if (this.prevState === CeilingFan.LOW) {
      this.ceilingFan.low();
    }
    if (this.prevState === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    }
    if (this.prevState === CeilingFan.HIGH) {
      this.ceilingFan.high();
    }
  }
}

export class CeilingFanMediumCommand implements Command {
  ceilingFan: CeilingFan;
  prevState: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevState = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  undo(): void {
    if (this.prevState === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
    if (this.prevState === CeilingFan.LOW) {
      this.ceilingFan.low();
    }
    if (this.prevState === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    }
    if (this.prevState === CeilingFan.HIGH) {
      this.ceilingFan.high();
    }
  }
}

export class CeilingFanHighCommand implements Command {
  ceilingFan: CeilingFan;
  prevState: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevState = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }

  undo(): void {
    if (this.prevState === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
    if (this.prevState === CeilingFan.LOW) {
      this.ceilingFan.low();
    }
    if (this.prevState === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    }
    if (this.prevState === CeilingFan.HIGH) {
      this.ceilingFan.high();
    }
  }
}
