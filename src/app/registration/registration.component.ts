import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  onSubmit(data:NgForm)
  {

    this.apiservice.Getdata(data.value).subscribe((response)=>{

      if(response===null){
         alert('field must be filled out')
      }
      else
      {
        alert("Successfully Registered...!");
        window.location.href="/login";
      }

    })
  }

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}