import { Iterator, DinerMenuIterator } from "./iterator";
import { MenuItem } from "./menu-item";
import { Menu } from "./menu";

export class PancakeHouseMenu implements Menu {
  menuItems: MenuItem[] = [];

  constructor() {
    this.addItem(
      "Classic Pancake Stack",
      "Fluffy pancakes, maple syrup, butter.",
      false,
      1.55
    );
    this.addItem(
      "Blueberry Burst Pancakes:",
      "Fluffy pancakes, fresh blueberries, whipped cream.",
      false,
      3.22
    );
    this.addItem(
      "Savory Breakfast Crepe",
      "Thin crepe, scrambled eggs, ham, cheese.",
      false,
      8.33
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.push(new MenuItem(name, description, vegetarian, price));
  }
  createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }
}
