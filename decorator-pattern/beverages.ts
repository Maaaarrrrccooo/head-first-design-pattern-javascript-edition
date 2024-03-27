export abstract class Beverage {
  description: string = "Unknown Beverage";

  constructor() {}

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 200;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend";
  }

  cost(): number {
    return 100;
  }
}

export class Americano extends Beverage {
  constructor() {
    super();
    this.description = "Americano";
  }

  cost(): number {
    return 150;
  }
}
