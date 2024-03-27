import { HomeTheaterFacade } from "./home-theater.facade";
import { Amplifier } from "./amplifier";
import { Tuner } from "./tuner";
import { StreamingPlayer } from "./streaming-player";
import { Projector } from "./projector";
import { Screen } from "./screen";
import { TheaterLights } from "./theater-lights";
import { PopcornPopper } from "./popcorn-popper";

function main() {
  const amp = new Amplifier("The amplifier");
  const tuner = new Tuner("The tuner", amp);
  const player = new StreamingPlayer("Streaming player", amp);
  const projector = new Projector("Projector", player);
  const lights = new TheaterLights("Theater lights!");
  const screen = new Screen("Our screen");
  const popper = new PopcornPopper("Popcornpopper");

  const htfacade = new HomeTheaterFacade(
    amp,
    tuner,
    player,
    projector,
    lights,
    screen,
    popper
  );

  console.log("Movie is starting!!");
  htfacade.watchMovie();
  console.log("\n");
  console.log("Movie is ending!!!");
  htfacade.endMovie();
}

main();
