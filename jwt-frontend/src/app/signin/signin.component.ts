import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserService} from "../user.service";
import {User} from "../user";


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: User= {firstname:"", lastname:"",email:"",password:""};

  constructor(private userService: UserService) {
  }

  login() {
    console.log('Login:', this.user.email);
    console.log('Password:', this.user.password);
    this.userService.postCreateUser(this.user).subscribe(data => {
    });

  }
}
