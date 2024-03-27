import { Tea } from "./tea";
import { Coffee } from "./coffee";

function main() {
  const myTea = new Tea();
  const customersCoffee = new Coffee();

  myTea.prepareRecipe();
  console.log("\n");
  customersCoffee.prepareRecipe();
}

main();
