import { Value } from './value';

export class StringValue extends Value<string> {
  getValue(): string {
    console.log(this);
    return this.rawValue;
  }
}
