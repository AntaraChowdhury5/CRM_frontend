import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/Component/add-emp/add-emp.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from 'src/app/Service/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'department','role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  emplist:any;
  name: any;

  constructor(private dialog:MatDialog,private route:Router,private emp:EmployeeService) { }
  ngOnInit(): void {
    this.getAllEmp();
  }
  public getAllEmp(){
    this.emp.getAllEmp().subscribe((response:any)=>{
      console.log(response.data);
      this.dataSource=new MatTableDataSource(response.data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    this.emplist=response.data;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    this.dialog.open(AddEmpComponent, {
      width:'30%'
    });
  }

  refreshButton() {
    window.location.reload();
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login')
  }
}