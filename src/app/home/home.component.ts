import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private storage: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.storage.logout();
    this.router.navigate(['login']);
  }

}
