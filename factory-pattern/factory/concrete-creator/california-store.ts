import { PizzaStore } from "./pizza-store";
import { Pizza } from "../pizza";
import { CaliforniaStyleVeggiePizza } from "../concrete-products/veggie-pizza";
import { CaliforniaStyleCheesePizza } from "../concrete-products/cheese-pizza";
import { CaliforniaPizzaIngredientFactory } from "../concrete-products/pizza-ingredient-factory";
import { CaliforniaStyleClamPizza } from "../concrete-products/clam-pizza";

export class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    const pizzaIngredientFactory = new CaliforniaPizzaIngredientFactory();
    switch (type.toLowerCase()) {
      case "veggie":
        pizza = new CaliforniaStyleVeggiePizza(pizzaIngredientFactory);
        pizza.setName("California Style Veggie Pizza");
      case "clam":
        pizza = new CaliforniaStyleClamPizza(pizzaIngredientFactory);
        pizza.setName("California Style Clam Pizza");
      case "cheese":
        pizza = new CaliforniaStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("California Style Cheese Pizza");
      default:
        pizza = new CaliforniaStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("California Style Cheese Pizza");
    }

    return pizza;
  }
}
