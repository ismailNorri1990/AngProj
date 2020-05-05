import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareils-view',
  templateUrl: './appareils-view.component.html',
  styleUrls: ['./appareils-view.component.css']
})
export class AppareilsViewComponent implements OnInit {


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
