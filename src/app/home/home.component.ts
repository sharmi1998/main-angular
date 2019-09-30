import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onSubmit(data:NgForm){
    console.log(data.value);
    


    if(data.value.username=="admin" && data.value.password=="1234"){
      localStorage.setItem('loggedIn','true');
      console.log("true");
      alert('successfully logged')
      this.router.navigateByUrl('welcome')
    }
  else{
    this.apiservice.getLogData(data.value).subscribe((response)=>{
      if(response[0]!=null)
      {
        console.log("response");
        console.log(response);
         localStorage.setItem('user','response[0].username', );
        if(response[0].utype=="user")
        {
           window.location.href="/user";
           alert('successfully logged')
        }
      }
      else
      {
  
        alert("Invalid username or password");
      }
    })
  }
  }
  constructor(private router:Router, private apiservice:ApiService) { }

  ngOnInit() {
    
  }
 

}
