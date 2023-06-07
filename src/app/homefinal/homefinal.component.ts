import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homefinal',
  templateUrl: './homefinal.component.html',
  styleUrls: ['./homefinal.component.scss']
})
export class HomefinalComponent {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/home1");
  }

  goForward(){
    this.router.navigateByUrl("/survey");
  }
}
