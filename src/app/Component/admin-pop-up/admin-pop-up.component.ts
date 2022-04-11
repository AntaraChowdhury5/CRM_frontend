import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pop-up',
  templateUrl: './admin-pop-up.component.html',
  styleUrls: ['./admin-pop-up.component.scss']
})
export class AdminPopUpComponent implements OnInit {

  constructor(private router:Router, private dialogref:MatDialogRef<AdminPopUpComponent>) { }

  ngOnInit(): void {
  }
  add(){
    this.router.navigateByUrl('/dashboard');
    this.dialogref.close();
  }
  update(){
    this.router.navigateByUrl('/profile');
    this.dialogref.close();
  }

}
