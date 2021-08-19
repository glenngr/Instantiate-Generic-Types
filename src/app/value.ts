export abstract class Value<T> {
  constructor(protected readonly rawValue: string) {}
  abstract getValue(): T;
}
