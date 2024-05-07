import { Amplifier } from "./amplifier";
import { Tuner } from "./tuner";
import { StreamingPlayer } from "./streaming-player";
import { Projector } from "./projector";
import { Screen } from "./screen";
import { TheaterLights } from "./theater-lights";
import { PopcornPopper } from "./popcorn-popper";

export class HomeTheaterFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;
  /* The constructor takes references to the different devices that make up the home theater system. */
  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
  }

  watchMovie(popper: PopcornPopper) {
    popper.on();
    popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play("The Dark Knight");
  }

  endMovie() {
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.tuner.off();
    this.player.stop();
    this.player.off();
    this.popper.off();
  }
}
