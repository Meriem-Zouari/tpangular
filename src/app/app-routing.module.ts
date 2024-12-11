import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondchildComponent } from './secondchild/secondchild.component'; 
import { FirstchildComponent } from './firstchild/firstchild.component';
import { ThirdchildComponent } from './thirdchild/thirdchild.component';
import {CvComponent} from './cvTech/cv/cv.component';
import { MiniworldComponent } from './miniworld/miniworld.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'ex1', component: FirstchildComponent},
  { path:'ex2', component: SecondchildComponent }, 
  {path:'ex3', component:ThirdchildComponent},
  {path:'cv/:id', component:DetailComponent},
  {path:'cv', component:CvComponent},
  {path:'miniworld', component:MiniworldComponent},
  {path:'rainbow', component:RainbowComponent},
  {path:'form', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
