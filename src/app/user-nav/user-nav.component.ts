import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('/home1');
  }
}
