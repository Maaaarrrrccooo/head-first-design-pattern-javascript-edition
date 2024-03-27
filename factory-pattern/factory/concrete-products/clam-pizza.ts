import { Pizza } from "../pizza";
import { PizzaIngredientFactory } from "./pizza-ingredient-factory";

export class NYStyleClamPizza extends Pizza {
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
    this.clam = this.pizzaIngredientFactory.createClam();
  }
}

export class ChicagoStyleClamPizza extends Pizza {
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
    this.clam = this.pizzaIngredientFactory.createClam();
  }

  cut() {
    console.log("Cutting pizza into square slices");
  }
}

export class CaliforniaStyleClamPizza extends Pizza {
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
    this.clam = this.pizzaIngredientFactory.createClam();
  }
}
