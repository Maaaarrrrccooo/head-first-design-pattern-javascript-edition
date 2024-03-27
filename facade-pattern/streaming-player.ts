import { Amplifier } from "./amplifier";

export class StreamingPlayer {
  description: string;

  amplifier: Amplifier;
  movie?: string;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} off`);
  }

  play(movie: string) {
    this.movie = movie;

    console.log(`${this.description} playing "${movie}"`);
  }

  stop() {
    console.log(`${this.description} stopped "${this.movie}"`);
  }

  pause() {
    console.log(`${this.description} paused "${this.movie}"`);
  }

  setTwoChannelAudio() {
    console.log(`${this.description} set two channel audio`);
  }

  setSurroundAudio() {
    console.log(`${this.description} set surround audio`);
  }

  toString() {
    return this.description;
  }
}
