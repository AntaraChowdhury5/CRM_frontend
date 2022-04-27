import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/Service/data.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';
import { UpdateEmpComponent } from '../update-emp/update-emp.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  token: any;
  name: any;
  email: any;
  password: any;
  dept: any;
  role: any;
  address?:string;
  mobile?:number;
  public form!: FormGroup;

  constructor(private empService: EmployeeService, private localStorage: LocalStorageService,
    public dialog: MatDialog, private data: DataService) { }
    
  ngOnInit(): void {
    this.token = this.localStorage.getItem('token')
    this.data.recievedData.subscribe((res: any) => {
     
      this.empService.getEmp(res.data.UserDetails.userId).subscribe((response: any) => {
        
        this.name = response.data.name;
        this.email = response.data.email;
        this.password = response.data.password;
        this.dept = response.data.department.dept_name;
        this.role=response.data.role.role_name;
        this.address=response.data.address;
        this.mobile=response.data.mobile;
      })
    })
  }

  updateEmployee(){
    this.data.recievedData.subscribe((res: any) => {
        this.empService.getEmp(res.data.UserDetails.userId).subscribe((response: any) => {
          const re={
            _id:res.data.UserDetails.userId,
          name : response.data.name,
          email :response.data.email,
          password : response.data.password,
          dept :response.data.department.dept_name,
          role:response.data.role.role_name,
          address:response.data.address,
          mobile:response.data.mobile,
          }
          this.dialog.open(UpdateEmpComponent,{
            width:'50%',
           data:re
          });
        })
    })
    
  }
}


/*
getProfile() { 
* openDialog(profileObjet:any): void {
  const dialogRef = this.dialog.open(UpdateMyProfileComponent, {
    data: profileObjet,width:'600px',height:'550px'
  });
 
  dialogRef.afterClosed().subscribe(result => {
    this.name = result;
    this.dateOfBirth = result;
    this.gender = result;
    this.emailId = result;
    this.mobileNumber = result;
    this.interest = result;
    this.location = result;
  });
} */

