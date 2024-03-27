import { PizzaStore } from "./pizza-store";
import { Pizza } from "../pizza";
import { NYStyleVeggiePizza } from "../concrete-products/veggie-pizza";
import { NYStyleCheesePizza } from "../concrete-products/cheese-pizza";
import { NYStyleClamPizza } from "../concrete-products/clam-pizza";
import { NYPizzaIngredientFactory } from "../concrete-products/pizza-ingredient-factory";

export class NyPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    const pizzaIngredientFactory = new NYPizzaIngredientFactory();
    switch (type.toLowerCase()) {
      case "veggie":
        pizza = new NYStyleVeggiePizza(pizzaIngredientFactory);
        pizza.setName("NY Style Veggie Pizza");
      case "clam":
        pizza = new NYStyleClamPizza(pizzaIngredientFactory);
        pizza.setName("NY Style Clam Pizza");
      case "cheese":
        pizza = new NYStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("NY Style Cheese Pizza");
      default:
        pizza = new NYStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("NY Style Cheese Pizza");
    }

    return pizza;
  }
}
