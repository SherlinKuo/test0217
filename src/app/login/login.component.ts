import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginData = new FormGroup({
    id: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log("test");
  }
}
