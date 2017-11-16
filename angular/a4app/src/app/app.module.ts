import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HeadComponent } from './components/head/head.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
