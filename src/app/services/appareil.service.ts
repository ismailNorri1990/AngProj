export class AppareilService {
  status = 'Etteint';
  appareils = [
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

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

}
