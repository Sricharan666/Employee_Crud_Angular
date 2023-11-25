import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { BodyComponent } from './body/body.component';

import { RegardsComponent } from './regards/regards.component';
import { AddComponent } from './add/add.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     SigninComponent,
     BodyComponent,
     RegardsComponent,
     AddComponent,
     EmployeeComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
