import readline from "readline";

import { CaffeineBeverage } from "./caffeine-beverage";

export class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Brewing coffee grinds");
  }
  addCondiments(): void {
    console.log("Adding milk and sugar");
  }

  customerWantsCondiments(): boolean {
    return true;
  }
}
