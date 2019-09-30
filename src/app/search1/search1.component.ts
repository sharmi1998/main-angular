import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  status=false;
  constructor(private api:ApiService,private router:Router) { }

  editbutton(){
    console.log(this.mydata)
    this.api.updatedata(this.mydata[0]).subscribe((response:any)=>{
   alert('updated successfully');
    })
  }
deletebutton(){
  console.log(this.mydata)
  this.api.deletedata(this.mydata).subscribe((response:any)=>{
    alert('deleted')
  })
}
  mydata:Array<object>;
  onSubmit(data){
    console.log(data.value)
  this.api.searchdata(data.value.name).subscribe((response:Array<object>)=>{
    console.log(response)
  if(response.length>0){
    this.status=true;
    this.mydata=response;
  }
  else{
    alert('no result found')
  }
  
  })
  }
  ngOnInit() {
    console.log('in searching page')
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('')
    }
  }

}
