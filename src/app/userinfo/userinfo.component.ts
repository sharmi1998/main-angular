import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  status=false;
  constructor(private api:ApiService,private router:Router) { }
  
 mydata:Array<object>;
  onSubmit(data){
    console.log(data.value)
  this.api.searchData(data.value.name).subscribe((response:Array<object>)=>{
    console.log(response)
  if(response.length>0){
    this.status=true;
    this.mydata=response;
  }
  
  
  })
  }
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
