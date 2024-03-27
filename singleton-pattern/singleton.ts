class MyClass {
  private static uniqueInstance: MyClass;
  private constructor() {}

  static getInstance() {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new MyClass();
    }
  }
}
