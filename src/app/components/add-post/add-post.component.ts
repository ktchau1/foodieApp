import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  postForm: FormGroup;


  constructor(private service: FoodService, private formBuilder: FormBuilder) {
    this.postForm = formBuilder.group({
      item_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }


  selectImage(event:any) {

    if(event.target.files.length >0) {
      const file = event.target.files[0]
      console.log('File uploaded')
    }

  }

ngOnInit(){}

onSubmit(){
  if(this.postForm.valid){
    console.log("Post Created", this.postForm.value);
  }
}
}
