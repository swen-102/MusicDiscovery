import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  password: String;
  email: String;
  confirmPassword: String;


  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    var confirmPassword = this.confirmPassword;
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
      alert('Please fill out all fields...');
      user.name = "";
      user.email = "";
      user.username = "";
      user.password = "";
      return false;
    }

    else if(!this.validateService.validateEmail(user.email)){
      alert('Please enter a valid email...');
      this.email = "";
      return false;
    }

    else if(!this.validateService.validatePassword(user.password, confirmPassword)){
      alert('Passwords don\'t match...');
      this.password = "";
      this.confirmPassword = "";
      return false;
    }

    else {
      alert('Registered user!\n\nWelcome '+user.name+'!');
    }

  }

}
