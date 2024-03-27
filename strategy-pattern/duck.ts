import {
  FlyBehavior,
  FlyWithWings,
  FlyWithRockets,
  Quack,
  QuackBehavior,
  Squeek,
} from "./duck-behavior";

abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public abstract display(): void;

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public swim() {
    console.log("Swimming!!");
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  public display() {
    console.log("Mallard Duck Picture");
  }
}

class ToyDuck extends Duck {
  public display() {
    console.log("Toy Duck Picture");
  }
}

class MuteDuck extends Duck {
  public display() {
    console.log("Duck Picture");
  }
}

class ModelDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }
  public display(): void {
    console.log("I am a model duck");
  }
}

const runProgram = () => {
  const mallard = new MallardDuck();

  mallard.display();
  mallard.performFly();
  mallard.performQuack();

  const modelDuck = new ModelDuck();

  modelDuck.display();
  modelDuck.setFlyBehavior(new FlyWithRockets());
  modelDuck.setQuackBehavior(new Squeek());
  modelDuck.performFly();
  modelDuck.performQuack();
};

runProgram();
