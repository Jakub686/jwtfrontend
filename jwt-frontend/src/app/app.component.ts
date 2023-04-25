import { Component } from '@angular/core';
import {SigninComponent} from "./signin/signin.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SigninComponent, RouterOutlet]
})
export class AppComponent {
  title = 'jwt-frontend';
}
