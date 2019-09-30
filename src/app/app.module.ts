import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ElectricianComponent } from './electrician/electrician.component';
import {Routes,RouterModule} from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { PlumperComponent } from './plumper/plumper.component';
import { View1Component } from './view1/view1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { Home1Component } from './home1/home1.component';
import { Userinfo1Component } from './userinfo1/userinfo1.component';
import { Search1Component } from './search1/search1.component';

const appRoutes:Routes=[
  {path:'',component:Home1Component},
  {path:'welcome',component:WelcomeComponent},
  {path:'read',component:ElectricianComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent},
  {path:'read1',component:PlumperComponent},
  {path:'view1',component:View1Component},
  {path:'user',component:UserComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'userinfo',component:UserinfoComponent},
  {path:'home1', component:Home1Component},
  {path:'userinfo1',component:Userinfo1Component},
  {path:'search1',component:Search1Component},
  {path:'login',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ElectricianComponent,
    ViewComponent,
    SearchComponent,
    PlumperComponent,
    View1Component,
    WelcomeComponent,
    UserComponent,
    RegistrationComponent,
    UserinfoComponent,
    UserNavComponent,
    Home1Component,
    Userinfo1Component,
    Search1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
