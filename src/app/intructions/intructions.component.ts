import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intructions',
  templateUrl: './intructions.component.html',
  styleUrls: ['./intructions.component.scss']
})
export class IntructionsComponent {
  constructor(private router: Router){

  }

  goToInvite(){
    this.router.navigateByUrl("/register");
    localStorage.setItem("cafeteria", "invitar")
  }
}
