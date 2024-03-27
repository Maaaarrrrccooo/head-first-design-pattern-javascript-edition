export class Pizza {
  name: string;

  constructor(name?: string) {
    this.name = name ?? "Simple pizza";
  }

  prepare() {
    console.log("preparing pizza");
  }

  bake() {
    console.log("baking pizza");
  }

  cut() {
    console.log("cutting pizza");
  }

  box() {
    console.log(`boxing ${this.name} pizza`);
  }
}
