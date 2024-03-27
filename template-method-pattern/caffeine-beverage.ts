export abstract class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) this.addCondiments();
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  boilWater(): void {
    console.log("Boiling Water");
  }

  pourInCup(): void {
    console.log("Pouring into cup");
  }

  customerWantsCondiments() {
    return true;
  }
}
