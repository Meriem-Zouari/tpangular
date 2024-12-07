import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondchildComponent } from './secondchild/secondchild.component'; 
import { FirstchildComponent } from './firstchild/firstchild.component';
import { ThirdchildComponent } from './thirdchild/thirdchild.component';
import {CvComponent} from './cvTech/cv/cv.component';
import { MiniworldComponent } from './miniworld/miniworld.component';
import { RainbowComponent } from './rainbow/rainbow.component';

const routes: Routes = [
  {path:'ex1', component: FirstchildComponent},
  { path:'ex2', component: SecondchildComponent }, 
  {path:'ex3', component:ThirdchildComponent},
  {path:'cv', component:CvComponent},
  {path:'miniworld', component:MiniworldComponent},
  {path:'rainbow', component:RainbowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
