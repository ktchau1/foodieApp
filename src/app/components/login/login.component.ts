import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type: string ="password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash"

  loginForm: FormGroup;

  constructor(private service: UserService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {


    }

    //showing and hiding password
    hideShowPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
      this.isText ? this.type ="text" : this.type = "password";

    }


    onSubmit(){
      let formData = this.loginForm.value;
      this.service.login(formData).subscribe((result) => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        alert('Login Successful');
      }, (err) => {
        alert('Incorrect email/password')
      });
      }
    }
  


