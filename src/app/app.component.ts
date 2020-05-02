import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = 'Etteint';
  appareils = [
    {
      name: 'Machine à laver',
      status: this.status
    },
    {
      name: 'Radio',
      status: this.status
    },
    {
      name: 'Télévision',
      status: this.status
    }
  ];

  isAuth = false;
  lastUpdate = new Promise(
              (resolve, reject) => {
                const date =  new Date();
                setTimeout(() => resolve(date), 2000);
              });

  constructor() {
    setTimeout(
      () => { this.isAuth = true; } , 4000
      );
  }

  onAllumer() {
    console.log('On allume tout');
  }
}
