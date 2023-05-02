//tell angular this is a component
import { Component } from '@angular/core';

//define and configure this component
@Component({
  selector: 'app-coba', //target DOM
  templateUrl: './coba.component.html', //apa yang mau didisplay
})

//exporting component ini
export class CobaComponent {
  cobaNomor: number = 164;
  statusCoba: string = 'offline';

  getStatusCoba() {
    return this.statusCoba;
  }
}
