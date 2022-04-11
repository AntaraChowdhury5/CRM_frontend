import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public form!: FormGroup;
public name: any;
public email: any;
public department: any;
public role: any;
  constructor() { }

  ngOnInit(): void {
  }

}
