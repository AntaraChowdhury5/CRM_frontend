import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEmpComponent } from '../add-emp/add-emp.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuOpen=true;
  contentMargin=240;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=100;
    }
    else{
      this.contentMargin=20;
    }
  }

  refreshButton() {
    window.location.reload();
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login')
  }
}
