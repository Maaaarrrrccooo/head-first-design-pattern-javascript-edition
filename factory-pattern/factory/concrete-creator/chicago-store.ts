import { PizzaStore } from "./pizza-store";
import { Pizza } from "../pizza";
import { ChicagoStyleVeggiePizza } from "../concrete-products/veggie-pizza";
import { ChicagoStyleCheesePizza } from "../concrete-products/cheese-pizza";
import { ChicagoStyleClamPizza } from "../concrete-products/clam-pizza";
import { ChicagoPizzaIngredientFactory } from "../concrete-products/pizza-ingredient-factory";

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    const pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
    switch (type.toLowerCase()) {
      case "veggie":
        pizza = new ChicagoStyleVeggiePizza(pizzaIngredientFactory);
        pizza.setName("Chicago Style Veggie Pizza");
      case "clam":
        pizza = new ChicagoStyleClamPizza(pizzaIngredientFactory);
        pizza.setName("Chicago Style Clam Pizza");
      case "cheese":
        pizza = new ChicagoStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("Chicago Style Cheese Pizza");
      default:
        pizza = new ChicagoStyleCheesePizza(pizzaIngredientFactory);
        pizza.setName("Chicago Style Cheese Pizza");
    }

    return pizza;
  }
}
