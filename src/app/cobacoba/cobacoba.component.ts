//created with: ng g c cobacoba

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobacoba', //jika element html
  // selector: '[app-cobacoba]', //jika element attribute html
  // selector: '/app-cobacoba', //jika element class html
  templateUrl: './cobacoba.component.html',
  styleUrls: ['./cobacoba.component.css'],
})
export class CobacobaComponent {
  izinkanCoba = false;
  cobaStatus = 'Coba Binding BELUM aktif' //event binding (click)
  twoWayBind = 'Two Way Data Binding';
  outputNama = false;
  
  constructor(){
    setTimeout(() => {
      this.izinkanCoba=true;
    }, 2000);
  }
 
  
  onCreateCoba(){
    this.cobaStatus='Coba AKTIF! Nama:'+ this.twoWayBind
  }
  
  twoWayBindFunc(event:any){
    // this.twoWayBind = event.target.value //BISA JUGA
    this.twoWayBind = (<HTMLInputElement>event.target).value
  }
  
  usernameExerc=''
  resetUsername(){
    this.usernameExerc=''
  }

  namaCoba(){
    this.outputNama=true;
  }

}
