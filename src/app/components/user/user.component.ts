import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user-service/user.service'; 
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  // Properties
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }

  users: User[];

  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd:boolean = false;
  showUserForm:boolean = false;

  @ViewChild('userForm') form:any;

  data: any;

  
  // Methods
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });


  }
  
  onSubmit({ value, valid }: { value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is invalid');
    } else {
     value.isActive = true;
     value.registered = new Date();
     value.hide = true;
 
     this.userService.addUser(value);
     this.form.reset();
    }
  }
}

