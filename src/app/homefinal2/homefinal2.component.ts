import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homefinal2',
  templateUrl: './homefinal2.component.html',
  styleUrls: ['./homefinal2.component.scss']
})
export class Homefinal2Component {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/home2");
  }

  goForward(){
    this.router.navigateByUrl("/survey");
  }
}
