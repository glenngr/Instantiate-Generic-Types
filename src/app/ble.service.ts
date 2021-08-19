import { Injectable } from '@angular/core';
import { Value } from './value';
@Injectable({ providedIn: 'root' })
export class BleService {
  read<T>(_arg1, _arg2, _arg3, type: new (rawValue: string) => T): T {
    const rawValue = 'test';
    return new type(rawValue);
  }
}
