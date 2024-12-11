import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ThirdchildComponent } from './thirdchild/thirdchild.component';
import { GrandchildofthirdchildComponent } from './grandchildofthirdchild/grandchildofthirdchild.component';
import { ListecvComponent } from './cvTech/listecv/listecv.component';
import { ItemcvComponent } from './cvTech/itemcv/itemcv.component';
import { DetailcvComponent } from './cvTech/detailcv/detailcv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { MiniworldComponent } from './miniworld/miniworld.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstchildComponent,
    SecondchildComponent,
    ThirdchildComponent,
    GrandchildofthirdchildComponent,
    ListecvComponent,
    ItemcvComponent,
    DetailcvComponent,
    CvComponent,
    MiniworldComponent,
    RainbowComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    DetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
