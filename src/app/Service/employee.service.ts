import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { Employee } from '../DTO/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  token?:string;
  constructor(private httpService:HttpService, private localStorageService:LocalStorageService,private http: HttpClient) { }

  baseURL = 'http://localhost:3000/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('/emps/login',reqdata,false,header)
  }
  getAllEmp(){
    this.token = this.localStorageService.getItem('token');
    let header={
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/emps/',true,header)
  }
  getEmp(reqData:string){
    this.token = this.localStorageService.getItem('token');
    let header={
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/emps/'+reqData,true,header)
  }
  
  addEmployee(empData:Employee){
    this.token = this.localStorageService.getItem('token');
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    var formData: any = new FormData();
    formData.append('name', empData.name);
    formData.append('email',empData.email);
    formData.append('password',empData.password);
    formData.append('address',empData.address);
    formData.append('mobile',empData.mobile);
    formData.append('department[dept_name]',empData.department?.dept_name);
    formData.append('role[role_name]',empData.role?.role_name);
    formData.append('image', empData.image);

    return this.httpService.postService('/emps/',formData,true,header)  
  }

  updateEmployee(id:string,reqData:any){
    this.token = this.localStorageService.getItem('token');
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.putService('/emps/'+id,reqData,true,header)
  }

  deleteEmp(reqdata:any){
    this.token = this.localStorageService.getItem('token');
    let header={
      headers: new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.putService('/emps/delete/'+reqdata.id,reqdata,true,header)
  }
}
