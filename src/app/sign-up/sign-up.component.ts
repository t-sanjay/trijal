import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input() showSignUp: boolean = false;

  authenticateForm: FormGroup;

  stateOptions: any[] = [
    { label: 'Sign Up', value: 'signup' },
    { label: 'Login', value: 'login' },
  ];

  @Output() signUp = new EventEmitter<boolean>();

  hideSignUp() {
    this.signUp.emit(false);
  }

  ngOnInit(): void {
    this.authenticateForm = new FormGroup({
      type: new FormControl(),
      email: new FormControl(),
    });
  }
}
