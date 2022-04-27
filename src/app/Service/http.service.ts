import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../DTO/employee';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseURL
  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqdata: Employee, token: boolean = true, httpOption: any) {
    return this.httpClient.post(this.baseUrl + url, reqdata, token && httpOption)
  }
  putService(url: string, reqdata: any, token: boolean = true, httpOption: any) {
    return this.httpClient.put(this.baseUrl + url, reqdata, token && httpOption)
  }
  getService(url: string, token: boolean = true, httpOption: any) {
    return this.httpClient.get(this.baseUrl + url, token && httpOption)
  }
  deleteService(url: string, token: boolean = true, httpOptions: any) {
    console.log("http delete=====");
    return this.httpClient.delete(this.baseUrl + url, token && httpOptions)
  }
}