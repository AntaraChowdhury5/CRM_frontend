import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  token:any;

  constructor(private httpService:HttpService, private localStorageService:LocalStorageService) { }

  getAllDept(){
    this.token = this.localStorageService.getItem('token');
    let header={
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/dept/',true,header)
  }
  addDept(reqdata:any){
    this.token = this.localStorageService.getItem('token');
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.postService('/dept/',reqdata,true,header)
  }

  updateDept(id:any,reqData:any){
    this.token = this.localStorageService.getItem('token');
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.putService('/dept/'+id,reqData,true,header)
  }

  deleteDept(reqdata:any){
    this.token = this.localStorageService.getItem('token');
    console.log(reqdata);
    let header={
      headers: new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.deleteService('/dept/'+reqdata.id,true,header)
  }
}
