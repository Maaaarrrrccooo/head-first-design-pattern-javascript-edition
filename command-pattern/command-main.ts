// Client
import { RemoteControl } from "./remote-control";
import { Light, LightOnCommand, LightOffCommand } from "./light-commands";
import {
  Stereo,
  StereoOnWithCDCommand,
  StereoOffCDCommand,
} from "./stereo-commands";
import {
  CeilingFan,
  CeilingFanOffCommand,
  CeilingFanLowCommand,
} from "./ceilingfan-commands";

function main() {
  const remoteControl = new RemoteControl();

  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);
  remoteControl.setCommand(0, lightOnCommand, lightOffCommand);

  remoteControl.onButtonWasPushed(0);

  const stereo = new Stereo();
  const stereoOnCommand = new StereoOnWithCDCommand(stereo);
  const stereoOffCommand = new StereoOffCDCommand(stereo);

  remoteControl.setCommand(1, stereoOnCommand, stereoOffCommand);

  remoteControl.onButtonWasPushed(1);
  remoteControl.offButtonWasPushed(1);

  remoteControl.offButtonWasPushed(0);

  console.log(remoteControl);

  remoteControl.undoButtonWasPushed();

  const ceilingFan = new CeilingFan("Bedroom");
  remoteControl.setCommand(
    2,
    new CeilingFanLowCommand(ceilingFan),
    new CeilingFanOffCommand(ceilingFan)
  );

  remoteControl.onButtonWasPushed(2);
  remoteControl.undoButtonWasPushed();
  remoteControl.onButtonWasPushed(2);
  remoteControl.onButtonWasPushed(2);
  remoteControl.undoButtonWasPushed();
}

main();
