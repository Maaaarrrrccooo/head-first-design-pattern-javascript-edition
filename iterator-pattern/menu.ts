import { Iterator } from "./iterator";

export interface Menu {
  createIterator(): Iterator;
}
