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
roleList=["Business Manager","Project Manager","Project Leads","Developers","QA","Senior QA","Account Manager"];
employeeFrom!: FormGroup;
submitted = false;
actionBtn :string ="Save"
  constructor(private fromBuider:FormBuilder, private emp:EmployeeService,private dialogref:MatDialogRef<AddEmpComponent>,
    @Inject(MAT_DIALOG_DATA) private editData:any, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.employeeFrom=this.fromBuider.group({
      name:['', Validators.required],
      email:['', Validators.required],
      department:['', Validators.required],
      role:['', Validators.required],
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn="Update"
    }
    
  }
  addEmployee(){
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