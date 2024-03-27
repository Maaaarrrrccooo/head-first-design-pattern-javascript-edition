import { StreamingPlayer } from "./streaming-player";

export class Projector {
  description: string;
  player: StreamingPlayer;

  constructor(description: string, player: StreamingPlayer) {
    this.description = description;
    this.player = player;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} off`);
  }

  wideScreenMode() {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
  }

  tvMode() {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
  }

  toString() {
    return this.description;
  }
}
