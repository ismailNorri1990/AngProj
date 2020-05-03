import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => { this.isAuth = true; } , 4000
      );
  }

  appareils: any[];

  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date =  new Date();
      setTimeout(() => resolve(date), 2000);
              });

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }


 onAllumer() {
    this.appareilService.switchOnAll();
  }

 onEteindre() {
  this.appareilService.switchOffAll();
  }
}

