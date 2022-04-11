import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value:string): void {
    localStorage.setItem(key,value);
  }
  
  public getItem(key: string): string {
    return JSON.parse(localStorage.getItem(key)|| '{}');
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}


/* localStorage.setItem('token', response.data.UserDetails.token);
this.token=localStorage.getItem('token')
    this.token = this.localStorageService.getItem(this.formGroup.get('storageKey').value);

    this.formGroup.get('storageKey').value,
  this.formGroup.get('storageData').value
 */