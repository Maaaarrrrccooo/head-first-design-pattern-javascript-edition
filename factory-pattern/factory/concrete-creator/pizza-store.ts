import { Pizza } from "../pizza";

export abstract class PizzaStore {
  constructor() {}

  abstract createPizza(type: string): Pizza;

  orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
