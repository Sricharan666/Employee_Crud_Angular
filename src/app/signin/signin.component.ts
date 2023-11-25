import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public name = "";
  public number = "";
  public email = "";
  public password = "";
  
  public name1 = new FormControl(this.name);
  public number1 = new FormControl(this.number);
  public email1 = new FormControl(this.email);
  public password1 = new FormControl(this.password);
 
  constructor( public rtr : Router) { }

  ngOnInit(): void {
  }
  onsubmit(){

    if ((this.email1.value && this.password1.value && this.name1.value && this.number1.value) == "") {
      alert("Please enter values");
    } else {
     localStorage.setItem("first", this.email1.value);
     localStorage.setItem("second", this.password1.value);
      this.rtr.navigate(["log"]);
     }
    } 
   
    submit1(){
      this.rtr.navigate(["log"]);
    }  

  
}
