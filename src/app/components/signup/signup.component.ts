import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  signUpForm: FormGroup;
  
  constructor (private service:UserService,private formBuilder: FormBuilder) { 

    this.signUpForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
      

      ngOnInit(): void{}


//showing and hiding password
hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}

onSignup(){
  let formData = this.signUpForm.value;
  this.service.signup(formData).subscribe((result) =>{
    alert('Register successful!');
  }, (err) => {
    alert('Register successful!');
    console.log(err);
  })

  }
}
// private validateAllFormFilled(formGroup:FormGroup){
//   Object.keys(formGroup.controls).forEach(field =>{
//     const control = formGroup.get(field);
//     if (control instanceof FormControl) {
//       control.markAsDirty({ onlySelf: true});
//     } else if (control instanceof FormGroup) {
//       this.validateAllFormFilled(control)
//     }
//   })
// }

