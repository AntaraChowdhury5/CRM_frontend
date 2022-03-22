import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private emp:EmployeeService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],  
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
     })
    }
    else
    {
      console.log("invalid");
    }
  }

}
