import { Subject } from 'rxjs/Subject';

export class AppareilService {
  status = 'Etteint';

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: this.status
    },
    {
      id: 3,
      name: 'Radio',
      status: this.status
    },
    {
      id: 3,
      name: 'Télévision',
      status: this.status
    }
  ];

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

}
