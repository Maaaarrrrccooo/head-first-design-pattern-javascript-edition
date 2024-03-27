import { Iterator } from "./iterator";
import { MenuItem } from "./menu-item";
import { Menu } from "./menu";

export class Waitress {
  dinerMenu: Menu;
  pancakeHouseMenu: Menu;
  menus: Menu;

  constructor(dinerMenu: Menu, pancakeHouseMenu: Menu) {
    this.dinerMenu = dinerMenu;
    this.pancakeHouseMenu = pancakeHouseMenu;
  }

  printMenu() {
    const dinerMenuIterator: Iterator = this.dinerMenu.createIterator();
    this.printMenuIterator(dinerMenuIterator);

    const pancakeHouseIterator: Iterator =
      this.pancakeHouseMenu.createIterator();
    this.printMenuIterator(pancakeHouseIterator);
  }

  private printMenuIterator(iterator: Iterator) {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next();
      console.log(menuItem.getName);
      console.log(menuItem.getDescription);
      console.log(menuItem.getPrice);
    }
  }
}
