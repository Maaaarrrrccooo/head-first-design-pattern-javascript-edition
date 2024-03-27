export interface FlyBehavior {
  fly(): void;
}

export interface QuackBehavior {
  quack(): void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("fly");
  }
}

export class FlyWithNoWings implements FlyBehavior {
  fly(): void {
    console.log("I have no wings :(");
  }
}

export class FlyWithRockets implements FlyBehavior {
  fly(): void {
    console.log("Flying with Rockets");
  }
}

export class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack!");
  }
}

export class Squeek implements QuackBehavior {
  quack(): void {
    console.log("Squeek");
  }
}
