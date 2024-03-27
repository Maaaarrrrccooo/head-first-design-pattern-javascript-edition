import { Pizza } from "../pizza";
import { PizzaIngredientFactory } from "./pizza-ingredient-factory";

export class NYStyleCheesePizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this.getName}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this.getName}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  }

  cut() {
    console.log("Cutting pizza into square slices");
  }
}

export class CaliforniaStyleCheesePizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this.getName}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  }
}
