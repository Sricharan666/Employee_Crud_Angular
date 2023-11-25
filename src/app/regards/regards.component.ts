import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employeemodel';

@Component({
  selector: 'app-regards',
  templateUrl: './regards.component.html',
  styleUrls: ['./regards.component.css']
})
export class RegardsComponent implements OnInit {

  Formvalue ! :FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;

  constructor(private formb : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.Formvalue = this.formb.group(
      {
        firstname : [''],
        lastname : [''],
        email : [''],
        mobile : [''],
        salary : ['']
      }
    )
    this.getAllEmployee(); 
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.Formvalue.value.firstname;
    this.employeeModelObj.lastName = this.Formvalue.value.lastname;
    this.employeeModelObj.email = this.Formvalue.value.email;
    this.employeeModelObj.mobile = this.Formvalue.value.mobile;
    this.employeeModelObj.salary = this.Formvalue.value.salary;
    this.api.postEmployee(this.employeeModelObj).subscribe(data1=>{
      console.log(data1);
      alert("employee added sucessfully")
      this.Formvalue.reset();
      this.getAllEmployee(); 
       //after fill and submit the form added the regard
    } )
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(data2=>{
      this.employeeData = data2;
    })
  }

  deleteEmployee(r1 : any){
    this.api.deleteEmployee(r1.id).subscribe(data3=>{
     alert("Employee deleted");
     this.getAllEmployee(); //for not refreshing the page
 })
}

onEdit(s : any){
  this.showAdd = false;
  this.showUpdate = true;
  this.employeeModelObj.id=s.id;
  this.Formvalue.controls['firstname'].setValue(s.firstName);
  this.Formvalue.controls['lastname'].setValue(s.lastName);
  this.Formvalue.controls['email'].setValue(s.email);
  this.Formvalue.controls['mobile'].setValue(s.mobile);
  this.Formvalue.controls['salary'].setValue(s.salary);
}

updateEmployeeDetails(){
  this.employeeModelObj.firstName = this.Formvalue.value.firstname;
  this.employeeModelObj.lastName = this.Formvalue.value.lastname;
  this.employeeModelObj.email = this.Formvalue.value.email;
  this.employeeModelObj.mobile = this.Formvalue.value.mobile;
  this.employeeModelObj.salary = this.Formvalue.value.salary;
  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
    alert("update sucessfully");
    this.Formvalue.reset();
    this.getAllEmployee();
  })
}

clickAddEmployee(){
  this.Formvalue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}

}
