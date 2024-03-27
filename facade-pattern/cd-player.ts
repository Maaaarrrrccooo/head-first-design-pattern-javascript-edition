import { Amplifier } from "./amplifier";

export class CdPlayer {
  description: string;
  currentTrack: number;
  amplifier: Amplifier;
  title: string | null;

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

  eject() {
    this.title = null;
    console.log(`${this.description} eject`);
  }

  // play(title: string) {
  //   this.title = title;
  //   this.currentTrack = 0;
  //   console.log(${this.description} playing "${title}");
  // }

  // play(track: number) {
  //   if (!this.title) {
  //     console.log(
  //       ${this.description} can't play track ${this.currentTrack}, no cd inserted
  //     );
  //   } else {
  //     this.currentTrack = track;
  //     console.log(${this.description} playing track ${this.currentTrack});
  //   }
  // }

  stop() {
    this.currentTrack = 0;
    console.log(`${this.description} stopped`);
  }

  pause() {
    console.log(`${this.description} paused "${this.title}"`);
  }

  toString() {
    return this.description;
  }
}
