class Context {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }

  setState(state: State) {
    this.state = state;
  }
}

// State Interface
interface State {
  handle(context: Context): void;
}

// Concrete State A
class ConcreteStateA implements State {
  handle(context: Context) {
    console.log("State A handles the request.");
    context.setState(new ConcreteStateB());
  }
}

// Concrete State B
class ConcreteStateB implements State {
  handle(context: Context) {
    console.log("State B handles the request.");
    context.setState(new ConcreteStateA());
  }
}

const context = new Context(new ConcreteStateA());
context.request();
context.request();
context.request();
context.request();
