import { MenuItem } from "./menu-item";

export interface Iterator {
  hasNext(): boolean;
  next(): MenuItem;
}

export class DinerMenuIterator implements Iterator {
  items: MenuItem[];
  position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }
}

export class PancakeMenuIterator implements Iterator {
  items: MenuItem[];
  position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }
}
