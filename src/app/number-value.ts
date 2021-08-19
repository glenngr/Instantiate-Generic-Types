import { Value } from './value';

export class NumberValue extends Value<number> {
  getValue(): number {
    console.log(this);
    return +this.rawValue;
  }
}
