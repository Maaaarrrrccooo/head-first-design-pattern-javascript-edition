import { PizzaStore } from "./pizza-store";
import { SimplePizzaFactory } from "./simple-pizza-factory";

function main() {
  const factory = new SimplePizzaFactory();
  const pizzaStore = new PizzaStore(factory);
  pizzaStore.orderPizza("veggie");
}

main();
