import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, ReactiveFormsModule, FormsModule, CommonModule],
})
export class SigninComponent implements OnInit {
  signInForm: any;
  test = new FormGroup({});
  constructor(private signinService: SigninService, private router: Router) {
  }
  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit(): void {
    this.signInForm.controls['email'].markAsTouched();
    this.signInForm.controls['password'].markAsTouched();
    if (this.signInForm.valid && this.signInForm.touched && this.signInForm.value.email && this.signInForm.value.password) {
      this.signinService.login(this.signInForm.value).then((isLogin) => {
        if (isLogin) {
          this.router.navigateByUrl('products')
        }
      });
    }
  }
}
