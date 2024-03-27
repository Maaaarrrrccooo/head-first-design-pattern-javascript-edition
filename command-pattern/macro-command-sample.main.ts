// Client
import { RemoteControl } from "./remote-control";
import { MacroCommand } from "./command";
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

  const stereo = new Stereo();
  const stereoOnCommand = new StereoOnWithCDCommand(stereo);
  const stereoOffCommand = new StereoOffCDCommand(stereo);

  const ceilingFan = new CeilingFan("Bedroom");
  const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);
  const ceilingFanLowCommand = new CeilingFanLowCommand(ceilingFan);

  const macroOnCommand = new MacroCommand([
    lightOnCommand,
    stereoOnCommand,
    ceilingFanLowCommand,
  ]);

  const macroOffCommand = new MacroCommand([
    lightOffCommand,
    stereoOffCommand,
    ceilingFanOffCommand,
  ]);

  remoteControl.setCommand(0, macroOnCommand, macroOffCommand);

  console.log(remoteControl);

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  remoteControl.undoButtonWasPushed();
  console.log(remoteControl);
}

main();
