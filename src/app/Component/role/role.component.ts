import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  displayedColumns: string[] = ['role_id','role_name','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  rolelist:any;
  constructor(private role:RoleService) { }

  ngOnInit(): void {
    this.getAllDept();
  }

  public getAllDept(){
    this.role.getAllRole().subscribe((response:any)=>{
      console.log(response.data);
      this.dataSource=new MatTableDataSource(response.data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    this.rolelist=response.data;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
