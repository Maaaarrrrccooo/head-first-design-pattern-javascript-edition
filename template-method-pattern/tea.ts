import { CaffeineBeverage } from "./caffeine-beverage";

export class Tea extends CaffeineBeverage {
  brew(): void {
    console.log("Steeping tea");
  }
  addCondiments(): void {
    console.log("Adding Lemon");
  }
}
