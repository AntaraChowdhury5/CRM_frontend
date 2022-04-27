import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Service/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/DTO/employee';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public department: any;
  public role: any;
  public form!: FormGroup;
  public roleList = ["Manager","Developer","Team Leader","QA","Senior QA"];

  constructor( private emp: EmployeeService, 
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateEmpComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.name = this.editData.name;
    this.email = this.editData.email;
    this.department={dept_name:this.editData.department.dept_name};
    this.role={role_name:this.editData.role.role_name}
    console.log(this.editData);

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department:{dept_name:['', Validators.required]},
      role:{role_name:['', Validators.required]},
    });
  }

  public updateEmployee() {
    let data:Employee={
         name:this.form.value.name,
         email:this.form.value.email,
         department:{dept_name:this.form.value.department},
         role:{role_name:this.form.value.role}
    }
    this.emp.updateEmployee(this.editData._id, data).subscribe((response: any) => {
      console.log(response)
      this.snackbar.open('Employee Updated Successfully !', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    })
  }
}