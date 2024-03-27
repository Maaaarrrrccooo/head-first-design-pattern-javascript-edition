import { Pizza } from "../pizza";
import { PizzaIngredientFactory } from "./pizza-ingredient-factory";

export class NYStyleVeggiePizza extends Pizza {
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
    this.veggies = this.pizzaIngredientFactory.createVeggies();
  }
}

export class ChicagoStyleVeggiePizza extends Pizza {
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
    this.veggies = this.pizzaIngredientFactory.createVeggies();
  }

  cut() {
    console.log("Cutting pizza into square slices");
  }
}

export class CaliforniaStyleVeggiePizza extends Pizza {
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
    this.veggies = this.pizzaIngredientFactory.createVeggies();
  }
}
