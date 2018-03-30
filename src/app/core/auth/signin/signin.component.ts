import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  success: boolean = true;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.initForm();
  }
  
  onSubmit() {
    let username = this.signinForm.value['usernameForm'];
    let password = this.signinForm.value['passwordForm'];
    this.authService.login(username, password)
        .subscribe(result => {
            if (result === true) {
                // login successful
                this.success = result;
                this.router.navigate(['/home']);
            } else {
                // login failed
                this.success = result;
            }
        });
  }
  
  private initForm() {
    let usernameForm = '';
    let passwordForm = '';
    this.signinForm = new FormGroup({
      'usernameForm': new FormControl(usernameForm, Validators.required),
      'passwordForm': new FormControl(passwordForm, Validators.required)
    })
  }
  
}
