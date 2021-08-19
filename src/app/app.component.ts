import { Component, VERSION } from '@angular/core';
import { BleService } from './ble.service';
import { BooleanValue } from './boolean-value';
import { NumberValue } from './number-value';
import { StringValue } from './string-value';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private readonly ble: BleService) {
    const result = this.ble.read('1', '2', '3', BooleanValue);
    console.log(result.getValue());

    const result2 = this.ble.read('1', '2', '3', StringValue);
    console.log(result2.getValue());

    const result3 = this.ble.read('1', '2', '3', NumberValue);
    console.log(result3.getValue());
  }
}
