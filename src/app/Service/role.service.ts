import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  token: any;

  constructor(private httpService: HttpService) { }

  getAllRole() {
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'token': this.token
      })
    }
    return this.httpService.getService('/role/', true, header)
  }
  addRole(reqdata: any) {
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    }
    return this.httpService.postService('/role/', reqdata, true, header)
  }

  updateRole(id: any, reqData: any) {
    console.log(reqData);

    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    }
    return this.httpService.putService('/role/' + id, reqData, true, header)
  }

  deleteRole(reqdata: any) {
    this.token = localStorage.getItem('token')
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'token': this.token
      })
    }
    return this.httpService.deleteService('/role/' + reqdata.id, true, header)
  }
}
