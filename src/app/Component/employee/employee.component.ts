import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/Component/add-emp/add-emp.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from 'src/app/Service/employee.service';
import { UpdateEmpComponent } from '../update-emp/update-emp.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'department','role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public emplist:any;
 
  constructor(private dialog:MatDialog,private emp:EmployeeService) { }
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

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public openDialog() {
    this.dialog.open(AddEmpComponent, {
      width:'30%'
    });
  }
  public updateEmployee(row:any):void{
    console.log(row);
    this.dialog.open(UpdateEmpComponent,{
      width:'30%',
      data:row
    });
  }

  public deleteEmployee(row:any){
    let data={
    id:row._id
    }
     this.emp.deleteEmp(data).subscribe((response:any)=>{
      console.log(response)
    }) 
  }

}
