import {
  PaymentMethodCreditCard,
  PaymentMethodPayMaya,
  PaymentMethodStrategy,
} from "./payment-method-strategy";

class PaymentService {
  cost: number;
  paymentMethodStrategy: PaymentMethodStrategy;

  constructor(defaultPaymentMethodStrategy: PaymentMethodStrategy) {
    this.paymentMethodStrategy = defaultPaymentMethodStrategy;
    this.cost = 2000;
  }

  setPaymentStrategy(paymentMethodStrategy: PaymentMethodStrategy) {
    this.paymentMethodStrategy = paymentMethodStrategy;
  }

  processPayment() {
    if (this.paymentMethodStrategy.validatePaymentDetails()) {
      this.paymentMethodStrategy.pay(this.cost);
    }
  }
}

function runProgram() {
  const payment = new PaymentService(new PaymentMethodCreditCard());
  payment.processPayment();

  payment.setPaymentStrategy(new PaymentMethodPayMaya());
  payment.processPayment();
}

runProgram();
