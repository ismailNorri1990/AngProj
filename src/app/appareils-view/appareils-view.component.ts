import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

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
  appareilSubscription: Subscription;

  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date =  new Date();
      setTimeout(() => resolve(date), 2000);
              });

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }


 onAllumer() {
    this.appareilService.switchOnAll();
  }

 onEteindre() {
  this.appareilService.switchOffAll();
  }

}
