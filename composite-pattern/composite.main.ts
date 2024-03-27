abstract class MenuComponent {
  parent: MenuComponent | null = null;

  abstract getName(): string;
  abstract getPrice(): number;
  abstract isVegetarian(): boolean;
  abstract add(component: MenuComponent): void;
  abstract remove(component: MenuComponent): void;
  abstract print(): void;
}

class MenuItem extends MenuComponent {
  constructor(
    private name: string,
    private price: number,
    private vegetarian: boolean
  ) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  add(): void {
    throw new Error("Cannot add to a Menu Item.");
  }

  remove(): void {
    throw new Error("Cannot remove from a Menu Item.");
  }

  print(): void {
    console.log(
      `${this.getName()} (${this.getPrice()}) [${
        this.isVegetarian() ? "V" : ""
      }]`
    );
  }
}

class Menu extends MenuComponent {
  private children: MenuComponent[] = [];

  constructor(private name: string) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.children.reduce((total, child) => total + child.getPrice(), 0);
  }

  isVegetarian(): boolean {
    return this.children.every((child) => child.isVegetarian());
  }

  add(component: MenuComponent): void {
    component.parent = this;
    this.children.push(component);
  }

  remove(component: MenuComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  print(): void {
    console.log(`\n${this.getName()} [${this.isVegetarian() ? "V" : ""}]`);
    this.children.forEach((child) => child.print());
  }
}

const rootMenu = new Menu("Dinner Menu");
const appetizerMenu = new Menu("Appetizers");
const mainCourseMenu = new Menu("Main Courses");
const dessertMenu = new Menu("Desserts");

rootMenu.add(appetizerMenu);
rootMenu.add(mainCourseMenu);
rootMenu.add(dessertMenu);

appetizerMenu.add(new MenuItem("Spring Rolls", 5.99, true));
appetizerMenu.add(new MenuItem("Calamari", 6.99, false));

mainCourseMenu.add(new MenuItem("Steak", 12.99, false));
mainCourseMenu.add(new MenuItem("Pasta", 10.99, true));

dessertMenu.add(new MenuItem("Cheesecake", 6.99, true));
dessertMenu.add(new MenuItem("Tiramisu", 7.99, true));

rootMenu.print();
