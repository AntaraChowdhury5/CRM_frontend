import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Service/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isMenuOpen=true;
  private contentMargin=240;

  constructor(private route:Router, private localStorage:LocalStorageService) { }

  ngOnInit(): void {
  }
  public onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=100;
    }
    else{
      this.contentMargin=20;
    }
  }

  public refresh() {
    window.location.reload();
  }
  public logout(){
    this.localStorage.removeItem('token');
    this.route.navigateByUrl('/login')
  }
}
