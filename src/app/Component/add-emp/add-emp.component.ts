import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Service/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  public roleList = ["Manager", "Developer", "Team Leader", "QA"];
  public actionBtn: string = "Save"
  choosen: any;

  public form!: {
    name: string;
    email: string;
    password: string;
    address:string;
    mobile:number;
    department: string,
    role: string,
    image: FileList | null;
  };
  constructor(private emp: EmployeeService, private dialogref: MatDialogRef<AddEmpComponent>,
    @Inject(MAT_DIALOG_DATA) private editData: any, private snackbar: MatSnackBar) {
    this.form = { name: "", email: "", password: "", address:"",mobile:91,department: "", role: "", image: null }
  }
  ngOnInit(): void {
    if (this.editData) {
      this.actionBtn = "Update"
    }

  }

  fileChoose(event: any) {
    if (event.target.files.length > 0) {
      this.form.image = event.target.files[0];
    }
  }

  public addEmployee() {
    var name = this.form.name;
    var email = this.form.email;
    var password = this.form.password;
    var address= this.form.address;
    var mobile=this.form.mobile;
    var department = this.form.department;
    var role = this.form.role;
    var image = (this.form.image)

    this.emp.addEmployee({ name: name, email: email, password: password, address:address,mobile:mobile,
       department:{dept_name:department}, role: {role_name:role}, image: image }).subscribe((response: any) => {
      this.snackbar.open('Employee Added Successfully !', '', {
        duration: 2000,
      });
      this.dialogref.close();
    })
  }

}