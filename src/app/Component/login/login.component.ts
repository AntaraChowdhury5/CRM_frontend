import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';
import { AdminPopUpComponent } from '../admin-pop-up/admin-pop-up.component';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private submitted = true;
  res:any;
  

  constructor(private formBuilder: FormBuilder, private emp: EmployeeService, private router: Router,
    private dialog: MatDialog, private data: DataService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let login = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.emp.login(login).subscribe((response: any) => {
        this.localStorageService.setItem('token',response.data.UserDetails.token); 
        this.data.sendData(response);
      })
    }
    else {
      console.log("invalid");
    }
  }

  public openDialog() {
    this.data.recievedData.subscribe((res: any) => {
      //if (res.message == 'Login succesfully') {
        console.log(res);
        if (res.data.UserDetails.role.role_name == 'Admin') {
          this.dialog.open(AdminPopUpComponent, {
            width: '30%'
          });

        }
      
        else {
          this.dialog.open(PopUpComponent, {
            width: '30%'
          });
        }
      
    }

    )
  }

}
