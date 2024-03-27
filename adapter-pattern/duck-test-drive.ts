import { Duck, MallardDuck } from "./duck";
import { WildTurkey } from "./turkey";
import { TurkeyAdapter } from "./turkey-adapter";

function testDuck(duck: Duck) {
  duck.quack();
  duck.fly();
}
function main() {
  const duck = new MallardDuck();
  const turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);

  turkey.gobble();

  // testDuck(turkey) // Not allowed since turkey is incompatible with Duck

  testDuck(duck);
  testDuck(turkeyAdapter);
}

main();
