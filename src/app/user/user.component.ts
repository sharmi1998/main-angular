import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    console.log('in users page')
    status=JSON.parse(localStorage.getItem('user'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('');
    }
  }

}
