export class AppareilService {
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

  switchOnAll() {
    this.appareils.forEach(appareil => {
      appareil.status = 'Allumé';
    });
  }

  switchOffAll() {
    this.appareils.forEach(appareil => {
      appareil.status = 'Etteint';
    });
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'Allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'Etteint';
  }



}
