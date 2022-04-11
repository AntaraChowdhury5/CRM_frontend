import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  displayedColumns: string[] = ['dept_id','dept_name','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public deptlist:any;

  constructor(private dept:DepartmentService) { }

  ngOnInit(): void {
    this.getAllDept();
  }

  public getAllDept(){
    this.dept.getAllDept().subscribe((response:any)=>{
      console.log(response.data);
      this.dataSource=new MatTableDataSource(response.data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    this.deptlist=response.data;
    })
  }

 public  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
