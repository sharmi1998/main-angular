import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
   myData: Array<object> = [];
  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit() {
    console.log('in welcome page')
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('')
    }
    this.fetchData();
  }
  public fetchData(){
    this.apiservice.getdata().subscribe((response:Array<Object>)=>{
      this.myData=response;
    })
  }
}
