import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService:HttpService) { }
  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('/users/login',reqdata,false,header)
  }
}
