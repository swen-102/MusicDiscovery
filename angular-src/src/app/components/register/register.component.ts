import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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


  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

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
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          alert('Registered user!\n\nWelcome '+user.name+'!');
          // $('body').append('Welcome' + user.name + '!');
          // redirect upon successful register
          this.router.navigate(['/login']);
        } else {
          alert('Could not register user...');
          this.router.navigate(['/register']);
        }
      });
    }

  }

}
