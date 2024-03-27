import { Pizza } from "./pizza";
import { CaliforniaPizzaStore } from "./concrete-creator/california-store";
import { ChicagoPizzaStore } from "./concrete-creator/chicago-store";
import { NyPizzaStore } from "./concrete-creator/ny-pizza-store";

function main() {
  const pizzastore1 = new NyPizzaStore();
  const marcoPizza: Pizza = pizzastore1.orderPizza("clam");

  console.log(`Marco ordered a: ${marcoPizza.getName} \n`);

  const pizzastore2 = new CaliforniaPizzaStore();
  const ethanPizza: Pizza = pizzastore2.orderPizza("veggie");

  console.log(`Ethan ordered a: ${ethanPizza.getName} \n`);

  const pizzastore3 = new ChicagoPizzaStore();
  const ahmedPizza: Pizza = pizzastore3.orderPizza("cheese");

  console.log(`Ahmed ordered a: ${ahmedPizza.getName} \n`);
}

main();
