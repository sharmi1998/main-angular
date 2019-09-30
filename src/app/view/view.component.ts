import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   myData: Array<object> = [];

  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit() {
    console.log('inviewing  page')
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('')
    }
    this.fetchData();
  }
  public fetchData(){
    this.apiservice.getData().subscribe((response:Array<Object>)=>{
      this.myData=response;
    })
  }
}
