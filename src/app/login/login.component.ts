import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorComponent } from '../component/dialog/error/error.component';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginData = new FormGroup({
    id: new FormControl(''),
    key: new FormControl('')
  });
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.storage.getLoginLog() == 'success'){
      this.router.navigate(['home']);
    }
  }

  login(){
    var id = this.loginData.get('id')?.value;
    var key = this.loginData.get('key')?.value;
    if (id == "1234" && key == "1234"){
      this.storage.setLoginLog("success");
      this.router.navigate(['home']);
    }else{
      this.onError("帳密輸入錯誤");
    }

  }

  onError(error: string){
    const dialogRef = this.dialog.open(ErrorComponent, {
      data:{
        title: "登入錯誤",
        detail: error
      }
    });
  }
}
