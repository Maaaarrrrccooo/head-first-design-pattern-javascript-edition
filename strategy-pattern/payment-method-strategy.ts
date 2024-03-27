export interface PaymentMethodStrategy {
  validatePaymentDetails(): any;
  pay(amount: number): void;
}

export class PaymentMethodCreditCard implements PaymentMethodStrategy {
  validatePaymentDetails(): boolean {
    // Put credit card payment details validation logic
    console.log("payment details is valid");
    return true;
  }
  pay(amount: number) {
    console.log(`Paying amount: ${amount} using credit card`);
  }
}

export class PaymentMethodPayMaya implements PaymentMethodStrategy {
  validatePaymentDetails() {
    console.log("payment details is valid");
    return true;
  }
  pay(amount: number) {
    console.log(`Paying amount: ${amount} using pay maya`);
  }
}

export class PaymentMethodBankTransfer implements PaymentMethodStrategy {
  validatePaymentDetails() {
    console.log("payment details is valid");
    return true;
  }
  pay(amount: number) {
    console.log(`Paying amount: ${amount} using bank transfer`);
  }
}
