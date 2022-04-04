import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Service/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent implements OnInit {
  name: any;
  email: any;
  department: any;
  role: any;
  form!: FormGroup;

  roleList = ["Business Manager", "Project Manager", "Project Leads", "Developers", "QA", "Senior QA", "Account Manager"];
  submitted = false;
  constructor( private emp: EmployeeService, 
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateEmpComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.name = this.editData.name;
    this.email = this.editData.email;
    this.department = this.editData.department;
    this.role = this.editData.role;
    console.log(this.editData);

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  updateEmployee() {
    this.submitted = true;
    this.emp.updateEmployee(this.editData._id, this.form.value).subscribe((response: any) => {
      console.log(response)
      this.snackbar.open('Employee Updated Successfully !', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    })
  }
}