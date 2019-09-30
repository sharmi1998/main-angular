import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
status=false;
  constructor(private api:ApiService,private router:Router) { }
  editbutton(){
    console.log(this.mydata)
    this.api.updateData(this.mydata[0]).subscribe((response:any)=>{
   alert('updated successfully');
    })
  }
deletebutton(){
  console.log(this.mydata)
  this.api.deleteData(this.mydata).subscribe((response:any)=>{
    alert('deleted')
  })
}

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
    console.log('in welcome page')
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('')
    }
  }

}
