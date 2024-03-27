export class MenuItem {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  get getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this.vegetarian;
  }
}
