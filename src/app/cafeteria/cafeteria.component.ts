import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.scss']
})
export class CafeteriaComponent {

  constructor(private router: Router){

  }

  
  goBack(){
    this.router.navigateByUrl("/relaxpage1");
  }

  goToInvite(){
    this.router.navigateByUrl("/invite1");
    localStorage.setItem("cafeteria", "invitar")
  }

  goToIgnore(){
    this.router.navigateByUrl("/ignore1");
    localStorage.setItem("cafeteria", "ignorar")
  }

}
