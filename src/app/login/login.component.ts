import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  e1 = "";
  p1 = "";

  public username = new FormControl(this.e1);
  public password = new FormControl(this.p1);
  l1 = localStorage.getItem("first");
  l2 = localStorage.getItem("second");
  constructor( public rtr : Router) { }

  ngOnInit(): void {
  }
  submit1(){
    
    if (this.l1 == this.username.value && this.l2 == this.password.value) {
      this.rtr.navigate(["body"]);
    }else if (this.username.value == "" || this.password.value == "") {
      alert(" please enter the values");
    }
    
    else {
      alert("user name and pass word is incorrect");
    }
  }
  submit2(){
    this.rtr.navigate(["sign"]);
  }
}

