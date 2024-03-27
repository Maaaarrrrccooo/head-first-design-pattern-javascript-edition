export interface PizzaIngredientFactory {
  createDough(): string;
  createSauce(): string;
  createCheese(): string;
  createVeggies(): string[];
  createPepperoni(): string;
  createClam(): string;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): string {
    return "Thin Crust Dough";
  }
  createSauce(): string {
    return "Marinara Sauce";
  }
  createCheese(): string {
    return "Reggiano Cheese";
  }
  createVeggies(): string[] {
    return ["Garlic", "Onion", "Mushroom", "Red Pepper"];
  }
  createPepperoni(): string {
    return "Sliced Pepperoni";
  }
  createClam(): string {
    return "Flesh Clams";
  }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): string {
    return "Thick Crust Dough";
  }
  createSauce(): string {
    return "Plum Tomato Sauce";
  }
  createCheese(): string {
    return "Mozzarella Cheese";
  }
  createVeggies(): string[] {
    return ["Spinach", "Black Olives", "Egg Plant"];
  }
  createPepperoni(): string {
    return "Sliced Pepperoni";
  }
  createClam(): string {
    return "Frozen Clams";
  }
}

export class CaliforniaPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createDough(): string {
    return "Thin Crust Dough";
  }
  createSauce(): string {
    return "Peanut Sauce";
  }
  createCheese(): string {
    return "Goat Cheese";
  }
  createVeggies(): string[] {
    return ["Artichoke Hearts"];
  }
  createPepperoni(): string {
    return "Sliced Pepperoni";
  }
  createClam(): string {
    return "Frozen Clams";
  }
}
