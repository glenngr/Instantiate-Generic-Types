import { Value } from './value';

export class BooleanValue extends Value<boolean> {
  getValue(): boolean {
    console.log(this);
    return !!this.rawValue;
  }
}
