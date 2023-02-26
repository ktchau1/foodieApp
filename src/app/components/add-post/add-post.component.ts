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
  selectedImage: any;


  constructor(private service: FoodService, private formBuilder: FormBuilder) {
    this.postForm = formBuilder.group({
      item_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
  }

  ngOnInit():void{

  }



  selectFile(event:any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
  }

 post(){
  let formValues = this.postForm.value;

  let fd = new FormData();
  fd.append('image', this.selectedImage);
 }

}
