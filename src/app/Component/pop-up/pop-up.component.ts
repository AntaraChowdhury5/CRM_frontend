import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
ed:any;
  constructor(private data: DataService,  private router:Router, private empService: EmployeeService) { }

  ngOnInit(): void {
  }
}
