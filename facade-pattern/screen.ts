export class Screen {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  /**
   * Move the screen up
   */
  public up(): void {
    console.log(`${this.description} going up`);
  }

  /**
   * Move the screen down
   */
  public down(): void {
    console.log(`${this.description} going down`);
  }

  /**
   * Get a string representation of the screen
   * @returns {string} The description of the screen
   */
  public toString(): string {
    return this.description;
  }
}
