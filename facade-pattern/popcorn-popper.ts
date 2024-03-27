export class PopcornPopper {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} off`);
  }

  pop() {
    console.log(`${this.description} popping popcorn!`);
  }

  toString() {
    return this.description;
  }
}
