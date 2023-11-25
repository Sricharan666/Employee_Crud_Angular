import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BodyComponent } from './body/body.component';
import { AddComponent } from './add/add.component';
import { RegardsComponent } from './regards/regards.component';
import { EmployeeComponent } from './employee/employee.component';






const routes: Routes = [{path : 'log', component : LoginComponent},{path : 'sign', component : SigninComponent},
{path : 'body', component : BodyComponent,
children : [
{path : 'one', component : AddComponent},{path : 'two', component : RegardsComponent},{path : 'employee', component : EmployeeComponent},{path : '', component : AddComponent}
]},
{path : '**', component:SigninComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 