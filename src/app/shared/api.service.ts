import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    // .pipe(map((res : any)=>{
    //   return res;
    // }))
  
   }
   getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
  }
  
  deleteEmployee(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
  }
  
  updateEmployee(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
  }
}
