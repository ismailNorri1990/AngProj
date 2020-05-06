import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Injectable()
export class AppareilService {
  status = 'Etteint';

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {

  }

  addAppareil( name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    this.appareils.forEach(appareil => {
      appareil.status = 'Allumé';
    });
    this.emitAppareilSubject();
  }

  switchOffAll() {
    this.appareils.forEach(appareil => {
      appareil.status = 'Etteint';
    });
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'Allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'Etteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

saveAppareilsToServer() {
  this.httpClient
  .put('https://httpclientdemo-7ff5f.firebaseio.com/appareils.json', this.appareils)
  .subscribe(
    () => {
    console.log('Enregistrement réussi');
    },
    () => {
      console.log('Une erreur s\'est produite' + error );
    }
  );
}

getAppareilsFromServer() {
  this.httpClient
  .get<any[]>('https://httpclientdemo-7ff5f.firebaseio.com/appareils.json')
  .subscribe(
    (response) => {
      this.appareils = response;
      this.emitAppareilSubject();
    },
    (error) => {
      console.log('Erreur de chargement ! ' + error);
    }
  );
}

}
