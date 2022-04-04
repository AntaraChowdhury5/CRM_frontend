import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  token:any;
  constructor(private httpService:HttpService) { }
  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('/emps/login',reqdata,false,header)
  }
  getAllEmp(){
    this.token=localStorage.getItem('token')
    let header={
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/emps/',true,header)
  }
  addEmployee(reqdata:any){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.postService('/emps/',reqdata,true,header)
  }

  updateEmployee(id:any,reqData:any){
    console.log(reqData);
    
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.putService('/emps/'+id,reqData,true,header)
  }

  deleteEmp(reqdata:any){
    this.token=localStorage.getItem('token')
    console.log(reqdata);
    let header={
      headers: new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.deleteService('/emps/'+reqdata.id,true,header)
  }
}
