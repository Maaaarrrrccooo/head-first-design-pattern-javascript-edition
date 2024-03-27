import { Iterator, DinerMenuIterator } from "./iterator";
import { MenuItem } from "./menu-item";
import { Menu } from "./menu";

export class DinerMenu implements Menu {
  static MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = new Array(DinerMenu.MAX_ITEMS);

    this.addItem(
      "Classic Cheeseburger Platter",
      "Juicy beef patty, melted cheddar, lettuce, tomato, pickles, sesame bun, golden fries.",
      false,
      2.03
    );
    this.addItem(
      "Sizzling BBQ Ribs",
      "Tender pork ribs, tangy BBQ sauce, coleslaw, garlic bread.",
      false,
      5.32
    );
    this.addItem(
      "Zesty Lemon Garlic Shrimp Pasta",
      "Succulent shrimp, lemon garlic sauce, al dente pasta, fresh parsley.",
      false,
      4.33
    );
    this.addItem(
      "Vegetarian Falafel Wrap",
      "Crispy falafel, warm pita, lettuce, tomato, cucumber, tahini sauce.",
      true,
      8.99
    );
    this.addItem(
      "Homestyle Chicken Pot Pie",
      "Seasoned chicken, veggies, flaky crust.",
      false,
      7.03
    );
    this.addItem(
      "Decadent Chocolate Lava Cake",
      "Rich chocolate cake, molten center, vanilla ice cream",
      false,
      6.23
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.log("Sorry, menu is full! Can't add item to menu.");
    } else {
      this.menuItems[this.numberOfItems] = new MenuItem(
        name,
        description,
        vegetarian,
        price
      );
      this.numberOfItems = this.numberOfItems + 1;
    }
  }
  createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }
}
