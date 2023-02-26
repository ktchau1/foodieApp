import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home',component: HomeComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'signup',component: SignupComponent} ,
  { path: 'add-post', component: AddPostComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
