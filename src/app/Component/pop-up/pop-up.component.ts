import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
ed:any;
  constructor(private data: DataService,  private router:Router, private dialogref:MatDialogRef<PopUpComponent>) { }

  ngOnInit(): void {
    
  }
  update(){
    this.router.navigateByUrl('/profile');
    this.dialogref.close();
  }
}
