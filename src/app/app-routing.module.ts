import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { DepartmentComponent } from './Component/department/department.component';
import { RoleComponent } from './Component/role/role.component';
import { PopUpComponent } from './Component/pop-up/pop-up.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { AdminPopUpComponent } from './Component/admin-pop-up/admin-pop-up.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "popup", component:PopUpComponent},
  {path:"adminpop", component:AdminPopUpComponent},
  {path: "profile",component:ProfileComponent},
  {path:"dashboard",component:DashboardComponent,
  
  children:[
    {path:'', redirectTo:"/dashboard/employee", pathMatch:'full' },
    {path:"employee",component:EmployeeComponent},
    {path:"department",component:DepartmentComponent}, 
    {path:"role",component:RoleComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


