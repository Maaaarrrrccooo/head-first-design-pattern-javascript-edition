import { Pizza } from "./pizza";
import { VeggiePizza } from "./concrete-pizzas/veggie-pizza";
import { CheesePizza } from "./concrete-pizzas/cheese-pizza";
import { BaconCheesePizza } from "./concrete-pizzas/bacon-cheese-pizza";
import { AllMeatPizza } from "./concrete-pizzas/allmeat-pizza";

export class SimplePizzaFactory {
  constructor() {}

  createPizza(type: string): Pizza {
    switch (type.toLowerCase()) {
      case "veggie":
        return new VeggiePizza();
      case "allmeat":
        return new AllMeatPizza();
      case "bacon-cheese":
        return new BaconCheesePizza();
      case "cheese":
        return new CheesePizza();
      default:
        return new Pizza();
    }
  }
}
