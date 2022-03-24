import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private emp:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],  
  });
  }

  public login() { 
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let login={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
     }
     this.emp.login(login).subscribe((response:any)=>{
      localStorage.setItem('token',response.data.UserDetails.token)
       console.log(response);
       if(response.message == "Successfully logged in")
      {
        this.router.navigateByUrl('/dashboard')
      }
     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
