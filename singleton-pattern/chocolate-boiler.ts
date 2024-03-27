class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance() {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new ChocolateBoiler();
    }
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
