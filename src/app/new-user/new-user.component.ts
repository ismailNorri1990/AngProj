import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      email: ['' , [Validators.required , Validators.email]],
      drinkPreference: ['' , Validators.required],
      hobies: this.formBuilder.array([])
    });
  }

    onSubmitForm() {
      const formValue = this.userForm.value;
      const newUser = new User(
        formValue['firstName'],
        formValue['lastName'],
        formValue['email'],
        formValue['drinkPreference'],
        formValue['hobies'] ? formValue['hobies'] : []
      );
      this.userService.addUser(newUser);
      this.router.navigate(['/users']);
    }

    getHobies() {
      return this.userForm.get('hobies') as FormArray;
    }

    onAddHobby() {
      const newHobbyControl = this.formBuilder.control('', Validators.required);
      this.getHobies().push(newHobbyControl);
    }
}


