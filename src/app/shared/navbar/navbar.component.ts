import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  signupDialog : boolean = false;
  signupclick(){
    this.signupDialog = true;
  }
  loginClick(){
    return false;
  }
}
