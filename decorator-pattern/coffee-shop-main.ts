import { Espresso, HouseBlend, Americano } from "./beverages";
import { Soy, Whip, Mocha } from "./condiment-decorator";

function main() {
  const bev = new Espresso();

  console.log(`${bev.getDescription()} Php: ${bev.cost()}`);

  let bev2 = new HouseBlend();
  bev2 = new Mocha(bev2);
  bev2 = new Mocha(bev2);
  bev2 = new Whip(bev2);

  console.log(`${bev2.getDescription()} Php: ${bev2.cost()}`);

  let bev3 = new Americano();
  bev3 = new Mocha(bev3);
  bev3 = new Soy(bev3);
  bev3 = new Whip(bev3);

  console.log(`${bev3.getDescription()} Php: ${bev3.cost()}`);
}

main();
