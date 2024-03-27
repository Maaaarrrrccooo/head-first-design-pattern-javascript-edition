export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  pepperoni: string;
  cheese: string;
  clam: string;
  veggies: string[];

  constructor() {
    this.name = "";
    this.dough = "";
    this.sauce = "";
    this.cheese = "";
    this.clam = "";
    this.pepperoni = "";
    this.veggies = [];
  }

  get getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  abstract prepare(): void;

  bake() {
    console.log("Base for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza into official PizzaStore Box");
  }
}
