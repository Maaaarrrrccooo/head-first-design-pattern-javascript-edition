export interface Duck {
  quack(): void;
  fly(): void;
}

export class MallardDuck implements Duck {
  quack(): void {
    console.log("QUACK");
  }
  fly(): void {
    console.log("Fly");
  }
}
