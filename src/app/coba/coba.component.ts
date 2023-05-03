//tell angular this is a component
import { Component } from '@angular/core';

//define and configure this component
@Component({
  selector: 'app-coba', //target DOM
  templateUrl: './coba.component.html', //apa yang mau didisplay
  styles: [`
  .online{
    color:white;
  }`]
})

//exporting component ini beserta function isinya
export class CobaComponent {
  cobaNomor: number = 164;
  statusCoba: string = Math.random() > 0.5? 'online' : 'offline';

  getStatusCoba() {
    return this.statusCoba;
  }

  tentukanWarna(){
    return this.statusCoba === 'online' ? 'green':'purple';
  }
}
 