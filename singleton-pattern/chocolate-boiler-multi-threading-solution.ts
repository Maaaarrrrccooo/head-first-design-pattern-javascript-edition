class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler = new ChocolateBoiler(); // Lazy load the instance of the class

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance() {
    return this.uniqueInstance;
  }

  fill(): void {
    if (this.empty === true) {
      this.empty = false;
    }
  }

  boil(): void {
    if (!this.empty && !this.boiled) {
      this.boiled = true;
    }
  }

  get isEmpty() {
    return this.empty;
  }

  get isBoild() {
    return this.boiled;
  }
}
