import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEmpComponent } from './Component/add-emp/add-emp.component';
import { UpdateEmpComponent } from './Component/update-emp/update-emp.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DepartmentComponent } from './Component/department/department.component';
import { RoleComponent } from './Component/role/role.component';
import { PopUpComponent } from './Component/pop-up/pop-up.component';
import { AdminPopUpComponent } from './Component/admin-pop-up/admin-pop-up.component';
import { ProfileComponent } from './Component/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    DashboardComponent,
    EmployeeComponent,
    DepartmentComponent,
    RoleComponent,
    PopUpComponent,
    AdminPopUpComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
