/**
 * Assumptions
 * 1. No deductions
 * 2. Not doing the exact calculation for Tax Due
 *
 * Exact Calculations might be incorrect. It is not the aim of the code below but to show how would a strategy pattern will hypothetically will work in the code base
 */

export interface PHIncomeTaxStrategy {
  calculateTax(yearlyIncome: number);
}

export class MinWage implements PHIncomeTaxStrategy {
  calculateTax(yearlyIncome: number) {
    return 0;
  }
} // < Php 250,000

export class AboveMinimumWage implements PHIncomeTaxStrategy {
  private ratePercentage = 20;
  private unTaxeableIncome = 250_000;

  calculateTax(yearlyIncome: number) {
    const taxableIncome = yearlyIncome - this.unTaxeableIncome;

    return (taxableIncome * this.ratePercentage) / 100;
  }
} // Php 250,001 - Php 400,000

export class MiddleClassWage implements PHIncomeTaxStrategy {
  private ratePercentage = 25;
  private unTaxeableIncome = 400_000;
  private baseTaxAmount = 30_000;

  calculateTax(yearlyIncome: number) {
    const taxableIncome = yearlyIncome - this.unTaxeableIncome;

    return (taxableIncome * this.ratePercentage) / 100 + this.baseTaxAmount;
  }
} // Php 400,001 - Php 800,000

export class UpperMiddleClassWage implements PHIncomeTaxStrategy {
  private ratePercentage = 30;
  private unTaxeableIncome = 800_000;
  private baseTaxAmount = 130_000;

  calculateTax(yearlyIncome: number) {
    const taxableIncome = yearlyIncome - this.unTaxeableIncome;

    return (taxableIncome * this.ratePercentage) / 100 + this.baseTaxAmount;
  }
} // Php 800,001 - Php 2m

export class RichClassWage implements PHIncomeTaxStrategy {
  private ratePercentage = 32;
  private unTaxeableIncome = 2_000_000;
  private baseTaxAmount = 490_000;

  calculateTax(yearlyIncome: number) {
    const taxableIncome = yearlyIncome - this.unTaxeableIncome;

    return (taxableIncome * this.ratePercentage) / 100 + this.baseTaxAmount;
  }
} // Php 2,000,001m - Php 8m

export class CorruptClassWage implements PHIncomeTaxStrategy {
  private ratePercentage = 35;
  private unTaxeableIncome = 8_000_000;
  private baseTaxAmount = 2_410_000;

  calculateTax(yearlyIncome: number) {
    const taxableIncome = yearlyIncome - this.unTaxeableIncome;

    return (taxableIncome * this.ratePercentage) / 100 + this.baseTaxAmount;
  }
} // Over Php 8m
