export interface Command {
  execute(): void;
  undo(): void;
}

export class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}

export class MacroCommand implements Command {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    this.commands.forEach((command) => command.execute());
  }
  undo(): void {
    this.commands.forEach((command) => command.undo());
  }
}
