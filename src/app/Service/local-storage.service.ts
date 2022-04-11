import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(token: string, value:string): void {
    localStorage.setItem(token,value);
  }
  
  public getItem(token: string): string {
    return (localStorage.getItem(token)|| '{}');
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}