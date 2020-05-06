import { User } from '../model/user.model';
import { Subject } from 'rxjs';

export class UserService {
  users: User[] = [
    {
      firstName: 'Ismail',
      lastName: 'Norri',
      email: 'ismail.norri.24@gmail.com',
      drinkPreference: 'Café',
      hobies: ['Coding', 'Café', 'Vélo']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
   this.users.push(user);
   this.emitUser();
  }

}
