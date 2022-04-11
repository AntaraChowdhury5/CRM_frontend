import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
	MatDialogModule,
	MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import { UpdateEmpComponent } from './update-emp.component';

describe('UpdateEmpComponent', () => {
  let component: UpdateEmpComponent;
  let fixture: ComponentFixture<UpdateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpComponent ],
      imports: [HttpClientTestingModule,HttpClientTestingModule,MatSnackBarModule,MatDialogRef,MatDialogModule,MatDialog],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
