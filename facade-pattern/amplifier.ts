import { Tuner } from "./tuner";
import { StreamingPlayer } from "./streaming-player";

// Amplifier class represents an audio amplifier device.
export class Amplifier {
  // Description of the amplifier
  description: string;

  // Associated tuner device
  tuner: Tuner | null;

  // Associated streaming player device
  player: StreamingPlayer | null;

  // Constructor initializes the amplifier with a description
  constructor(description: string) {
    this.description = description;
    this.tuner = null;
    this.player = null;
  }

  // Turns on the amplifier
  on(): void {
    console.log(`${this.description} on`);
  }

  // Turns off the amplifier
  off(): void {
    console.log(`${this.description} off`);
  }

  // Sets the amplifier to stereo sound mode
  setStereoSound(): void {
    console.log(`${this.description} stereo mode on`);
  }

  // Sets the amplifier to surround sound mode
  setSurroundSound(): void {
    console.log(
      `${this.description} surround sound on (5 speakers, 1 subwoofer)`
    );
  }

  // Sets the volume level of the amplifier
  setVolume(level: number): void {
    console.log(`${this.description} setting volume to ${level}`);
  }

  // Sets the tuner device associated with the amplifier
  setTuner(tuner: Tuner): void {
    console.log(`${this.description} setting tuner to ${tuner}`);
    this.tuner = tuner;
  }

  // Sets the streaming player device associated with the amplifier
  setStreamingPlayer(player: StreamingPlayer): void {
    console.log(`${this.description} setting Streaming player to ${player}`);
    this.player = player;
  }

  // Returns a string representation of the amplifier
  toString(): string {
    return this.description;
  }
}
