import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Service/employee.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent implements OnInit {
  name:any
  roleList=["Business Manager","Project Manager","Project Leads","Developers","QA","Senior QA","Account Manager"];
  employeeFrom!: FormGroup;
  submitted = false;
  constructor(private fromBuider:FormBuilder, private emp:EmployeeService,private snackbar:MatSnackBar, 
    public dialogRef:MatDialogRef<UpdateEmpComponent> ,
    @Inject(MAT_DIALOG_DATA) public editData:any,) { }

  ngOnInit(): void {
    console.log(this.name);
    
    this.employeeFrom=this.fromBuider.group({
      name:['', Validators.required],
      email:['', Validators.required],
      department:['', Validators.required],
      role:['', Validators.required],
    });
    console.log(this.editData);
    /* if(this.editData){
      this.actionBtn="Update"
    } */
  }
  updateEmp(row:any){
    console.log(row);
    
    /* let data={
      id:row._id
      }
       this.emp.updateEmp(data).subscribe((response:any)=>{
        console.log(response)
      }) */
  }

  updateEmployee(){
    this.submitted=true;
      if(this.employeeFrom.valid)
      {
        console.log(this.employeeFrom.value);
        let reqData={
         name:this.employeeFrom.value.name,
         email:this.employeeFrom.value.email,
         department:this.employeeFrom.value.department,
         role:this.employeeFrom.value.role
      }
       /* this.emp.addEmployee(reqData).subscribe((response:any)=>{
         console.log(response)
         this.snackbar.open('Employee Updated Successfully !','',{
        duration: 2000,
      });
      this.dialogref.close();
       }) */
      }
      else
      {
        console.log("invalid");
      }
    }

} 