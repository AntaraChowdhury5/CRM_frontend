import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Service/employee.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
public roleList=["Manager","Developer","Team Leader","QA","Senior QA"];
public employeeForm!: FormGroup;
public actionBtn :string ="Save"
  constructor(private fromBuider:FormBuilder, private emp:EmployeeService,private dialogref:MatDialogRef<AddEmpComponent>,
    @Inject(MAT_DIALOG_DATA) private editData:any, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.employeeForm=this.fromBuider.group({
      name:['', Validators.required],
      email:['', Validators.required],
      department:{dept_name:['', Validators.required]},
      role:{role_name:['', Validators.required]},
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn="Update"
    }
    
  }
  public addEmployee(){
      if(this.employeeForm.valid)
      {
        console.log(this.employeeForm.value);
        let reqData={
         name:this.employeeForm.value.name,
         email:this.employeeForm.value.email,
         department:{dept_name:this.employeeForm.value.department},
         role:{role_name:this.employeeForm.value.role}
      }
       this.emp.addEmployee(reqData).subscribe((response:any)=>{
         console.log(response)
         this.snackbar.open('Employee Added Successfully !','',{
        duration: 2000,
      });
      this.dialogref.close();
       })
      }
      else
      {
        console.log("invalid");
      }
    }
  }