import { Waitress } from "./waitress";
import { DinerMenu } from "./diner-menu";
import { PancakeHouseMenu } from "./pancake-house-menu";

function main() {
  const dinerMenu = new DinerMenu();
  const pancakeHousemenu = new PancakeHouseMenu();
  const waitress = new Waitress(dinerMenu, pancakeHousemenu);

  waitress.printMenu();
}

main();
