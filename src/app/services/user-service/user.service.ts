import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [ 
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },

      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevinjohnson@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },

      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karenwilliams@hotmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
